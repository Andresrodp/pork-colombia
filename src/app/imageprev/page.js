'use client'
import react from "react";
import useStoreData from "../../stores/index.js";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ImagePrev = () => {
  const { photo } = useStoreData();
  const router = useRouter();
  const data = useStoreData(state => state);

  const handlePutData = async () => {
    console.log(data);
  };
  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center">
      <div className="relative h-auto">
        <Image src={photo} alt="photo" width={640} height={420} />
        <img src="https://res.cloudinary.com/do1akn4ua/image/upload/v1688695585/pork-colombia/marco_siqekm.png" className="absolute top-0 left-0 w-full h-full" />
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
