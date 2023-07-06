'use client'
import react from "react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col h-screen bg-[url('https://res.cloudinary.com/do1akn4ua/image/upload/v1688429778/pork-colombia/background-take-picture_wrpuk6.png')] bg-cover pt-16">
      <Image src={require('../../../public/take-picture.png')} alt="take a picture" />
      <button className='bg-orange-600 text-white font-sans text-base rounded-3xl px-5 py-2'>Abrir Camara</button>
    </div>
  )
}

export default Photo;