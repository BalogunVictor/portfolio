import Image from 'next/image'
import React from 'react'

export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>what i can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

         
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
                src='/assets/skills/html.png' 
                width='64'
                height='64' 
                alt='/' 
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='uppercase'>Html</h3>
            </div>
          </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
                src='/assets/skills/css.png' 
                width='64'
                height='64' 
                alt='/' 
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='uppercase'>css</h3>
            </div>
          </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
                src='/assets/skills/javascript.png' 
                width='64'
                height='64' 
                alt='/' 
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='uppercase'>javascript</h3>
            </div>
          </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
                src='/assets/skills/react.png' 
                width='64'
                height='64' 
                alt='/' 
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='uppercase'>react</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
                src='/assets/skills/nextjs.png' 
                width='64'
                height='64' 
                alt='/' 
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='uppercase'>nextjs</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
                src='/assets/skills/tailwind.png' 
                width='64'
                height='64' 
                alt='/' 
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='uppercase'>tailwind</h3>
            </div>
          </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
                src='/assets/skills/firebase.png' 
                width='64'
                height='64' 
                alt='/' 
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='uppercase'>Firebase</h3>
            </div>
          </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
                src='/assets/skills/github1.png' 
                width='64'
                height='64' 
                alt='/' 
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='uppercase'>github</h3>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
