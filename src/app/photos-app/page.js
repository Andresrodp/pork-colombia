'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useStoreData from '../../stores/index.js';
import { useRouter, } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { setEmail, setName } = useStoreData();
  const data = useStoreData(state => state);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('este campo es requerido'),
      name: Yup.string()
        .max(60, 'Must be 60 characters or less')
        .required('este campo es requerido'),
    }),
    onSubmit: values => {
      setEmail(values.email);
      setName(values.name);
      router.push('/photos-app/picture');
    },
  });

  return (
    <main className="w-full h-screen flex justify-center items-center bg-[url('https://res.cloudinary.com/do1akn4ua/image/upload/v1687819090/pork-colombia/bg-image-pork_ibkbur.png')]">
      <form onSubmit={formik.handleSubmit} className='w-3/5 flex flex-col items-start gap-3'>
        <h1 className='text-2xl text-white'>Ingresa los datos</h1>
        <label className='font-sans text-base' htmlFor='name'>Nombre Completo</label>
        <input
          id='name'
          name='name'
          type='text'
          className='rounded-sm h-10 w-4/5 px-2 bg-white shrink-0 text-black'
          placeholder='Ingresa nombre completo'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <p className='text-red-600 text-xs'>{formik.errors.name}</p>
        ) : null}
        <label htmlFor='email'>Correo electrónico</label>
        <input
          id='email'
          name='email'
          type='email'
          className='rounded-sm w-4/5 h-10 px-2 bg-white shrink-0 text-black'
          placeholder='Ingresa correo electrónico'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className='text-red-600 text-xs'>{formik.errors.email}</p>
        ) : null}
        <button type='submit' className='bg-orange-600 text-white font-sans text-base rounded-3xl px-5 py-2'>Enviar Datos</button>
      </form>
    </main>
  )
}
