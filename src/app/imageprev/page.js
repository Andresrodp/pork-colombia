'use client'
import react from "react";
import useStoreData from "../../stores/index.js";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import axios from "axios";
import Swal from "sweetalert2";


const ImagePrev = () => {
  const { name, email, photo } = useStoreData();
  const router = useRouter();
  const data = useStoreData(state => state);
  const photorender = photo ? URL.createObjectURL(photo) : '';

  const handlePutData = async () => {
    const formData = new FormData();
    try {
      formData.append('name', name);
      formData.append('email', email);
      formData.append('image', photo);
      console.log('Data >', data);
      console.log('Form Data >', formData.values());
      const res = await fetch('https://photos-app.comemascarnedecerdo.co/api/database/users/v1', {
        method: 'POST',
        body: formData,
      });
      console.log('respuesta >', res);
      if (res.ok) {
        Swal.fire({
          title: '¡Gracias por participar!',
          text: 'Tu foto ha sido enviada con éxito',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          router.push('/');
        })
      } else {
        Swal.fire({
          title: '¡Error!',
          text: 'Ocurrió un error al enviar tu foto',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          router.push('/photos-app');
        })
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center">
      <div className="relative h-auto">
        <Image src={photorender} alt="photo" width={640} height={420} />
        <Image alt="" width={640} height={420} src="https://res.cloudinary.com/do1akn4ua/image/upload/v1688695585/pork-colombia/marco_siqekm.png" className="absolute top-0 left-0 w-full h-full" />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/do1akn4ua/image/upload/v1688695585/pork-colombia/marco_siqekm.png')] bg-contain"></div> */}
      </div>
      <div className="flex gap-4">
        <button className="bg-transparent border-solid border-2 px-2 border-orange-600 rounded-3xl text-orange-600 font-semibold" onClick={(e) => { router.push('/camera') }}>Volver a Camara</button>
        <button onClick={handlePutData} className="bg-orange-600 text-white font-semibold rounded-3xl px-10 py-2">Enviar foto</button>
      </div>
    </div>
  )
};

export default ImagePrev;
