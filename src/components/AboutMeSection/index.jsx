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
          + 2 years transforming ideas into digital solutions, software developer with a deep enthusiasm for the IT world. My experience covers full-stack web development in React, Node.js, Spring Boot, creating high quality web applications, design and performance. In addition, I am fluent in Flutter for mobile development, allowing me to bring your ideas to the palm of your hand.
        </p>
      </motion.div>
    </>
  )
}
