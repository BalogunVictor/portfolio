import { ProjectItem } from './ProjectItem'


export const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-x-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>what I’ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem 
            title='Property Finder' 
            src= {'/assets/projects/property.jpg'}
            projectUrl='/property' 
           />

          <ProjectItem 
            title='Crypto App' 
            src= {'/assets/projects/crypto.jpg'}
            projectUrl='crypto' 
           />

          <ProjectItem 
            title='Netflix App' 
            src= {'/assets/projects/netflix.jpg'}
            projectUrl='/netflix' 
           />

          <ProjectItem 
            title='Twitch UI' 
            src= {'/assets/projects/twitch.jpg'}
            projectUrl='/twitch' 
           />

        </div>
      </div>
    </div>
  )
}
