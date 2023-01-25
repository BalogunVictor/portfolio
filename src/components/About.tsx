import React from 'react'

export const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
              I specialize in building mobile responsive front-end UI applications
              that connect with API’s and other backend technologies. I’m
              passionate about learning new technologies and understand there is
              more than one way to accomplish a task. Though I am most proficient
              in building front-end applications using HTML, CSS, Javascript, and
              React, I am a quick learner and can pick up new tech stacks as
              needed. I believe that being a great developer is not using one
              specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
              I started web developement in 2013 managing multiple e-commerce
              websites on CMS platforms such as WordPress, BigCommerce, and
              Shopify. I have experience working directly with clients and taking
              mock wireframes all the way to deployed applications. In my spare
              time I run Code Commerce, a Youtube channel where I teach web
              developement and various front-end technologies.
          </p>
          <p className='py-2 text-gray-600'>check out some of lastest projects.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img 
            src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            className='rounded-xl' 
            alt='/' 
          />
        </div>
      </div>
    </div>
  )
}

