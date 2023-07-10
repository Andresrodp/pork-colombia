'use client'
import React, { useRef, useEffect } from "react";
import useStoreData from '../../../stores/index.js';
import { useRouter } from "next/navigation";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { setPhoto } = useStoreData();
  const data = useStoreData(state => state);
  const router = useRouter();

  const startCamera = () => {
    navigator?.mediaDevices.getUserMedia({
      video: true,
      audio: false
    }).then((stream) => {
      videoRef.current.srcObject = stream;
    });
  };

  const stopCamera = () => {
    videoRef.current.srcObject.getTracks().forEach((track) => {
      track.stop();
    });
  };

  const takePicture = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const photo = canvasRef.current.toDataURL('image/png');
    const byteString = atob(photo.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: 'image/png' });
    const file = new File([blob], 'photo.png');
    setPhoto(file);
    stopCamera();
    router.push('/photos-app/imageprev');
  };
  useEffect(() => {
    startCamera();
  }, []);
  return (
    <div className="w-full flex items-center justify-center flex-col h-screen bg-[url('https://res.cloudinary.com/do1akn4ua/image/upload/v1688429778/pork-colombia/background-take-picture_wrpuk6.png')] bg-cover">
      <div className="w-10/12 flex items-center">
        <video ref={videoRef} className="w-full z-10" autoPlay></video>
        <button className="rounded-full z-50 w-10 h-10 bg-gray-500 -m-12" onClick={takePicture}></button>
      </div>
      <canvas ref={canvasRef} width="640" height="480" className="hidden"></canvas>
    </div>
  );
};

export default Camera;