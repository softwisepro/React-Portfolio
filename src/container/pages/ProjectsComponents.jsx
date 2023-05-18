import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Transitions from '../../components/Transition'

const Project = ({ link, title, descriptions }) => {
  return (
    <div className='w-full h-full flex flex-row gap-6 p-8 border rounded-2xl shadow-xl'>
      <div className='h-full w-1/2'>
        <iframe src={link}
          className='w-full h-96 rounded border shadow-md'
        />
      </div>
      <div className='w-1/2 flex flex-col gap-5'>
        <h1 className='font-bold text-2xl p-5'>{title}</h1>
        <p className='text-xl font-medium p-5'>
          {descriptions}
        </p>
        <Link
          to={link}
          target='_blank'
          className='flex justify-center items-center text-red-400 hover:text-red-700'
        >View full project <AiOutlineLink fontSize={20} className='ml-4' /></Link>
      </div>
    </div>
  )
}

const ProjectsComponents = () => {
  return (
    <Transitions>
      <>
        <div className='flex justify-center items-center w-full p-5'>
          <h1
            className='text-4xl leading-tight text-center p-5 inline-block font-bold'
          >
            My Projects
          </h1>
        </div>

        <div className='flex flex-col gap-10 h-full p-16'>
          <Project
            title={`Atomatiki.tech`}
            link={`https://www.atomatiki.tech`}
            descriptions={`A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
          page transitions, cool background effects, unique design and it is mobile responsive.`}
          />

          <Project
            title={`IcookWebs Business App`}
            link={`https://www.icookwebs.pythonanywhere.com`}
            descriptions={`A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
          page transitions, cool background effects, unique design and it is mobile responsive.`}
          />
        </div>
      </>
    </Transitions>
  )
}

export default ProjectsComponents