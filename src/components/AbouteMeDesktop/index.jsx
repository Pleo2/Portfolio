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
                More than 3 years transforming ideas into digital solutions,
                software developer with a deep enthusiasm for the IT world.
                My experience covers full-stack web
                development in React, Node.js, creating high
                quality web applications, design and performance. allowing me to
                bring your ideas to the palm of my hand. In the last months I
                have been dedicated to to the implementation of AI related
                services such as Microsoft Azure AI, GoApi, Mid Journey, Clip
                Drop, ChatGpt, Elevenlabs, EdenAI, etc..          
            </p>
        </motion.div>
    )
}
