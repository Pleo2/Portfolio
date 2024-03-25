'use client'

import {motion} from 'framer-motion'

export default function AbouteMeDesktop() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3}}
        >
            <p className='hidden lg:flex lg:mt-8 lg:text-zinc-400 lg:font-sans lg:text-xl lg:leading-loose'>
                + 2 years transforming ideas into digital solutions, software developer with a deep enthusiasm for the IT world. My experience covers full-stack web development in React, Node.js, Spring Boot, creating high quality web applications, design and performance. In addition, I am fluent in Flutter for mobile development, allowing me to bring your ideas to the palm of your hand.
            </p>
        </motion.div>
    )
}
