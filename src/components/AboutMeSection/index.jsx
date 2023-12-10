'use client'

import {motion} from 'framer-motion'
import Title from '../Title'

export default function AboutMe() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3}}
        className='lg:hidden'
      >
        <Title section={'About Me'} />
        <p className='text-zinc-400 font-sans mt-4 leading-8 md:text-xl md:leading-relaxed'>
          +2 years preparing myself in the area of Computer science in specific
          web development (front-end) especially with libraries like React, and
          css frameworks (tailwind, sass) in operating systems like linux(arch,
          fedora) and wsl(ubuntu).
        </p>
      </motion.div>
    </>
  )
}
