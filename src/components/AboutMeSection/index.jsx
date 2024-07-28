'use client'

import {motion} from 'framer-motion'
import Title from '../Title'

export default function AboutMe() {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}}
                className='lg:hidden'
            >
                <Title section={'About Me'} />
                {/* // remember this section exist the mobile and desktop version */}
                <p className='text-zinc-400 font-sans mt-4 leading-8 md:text-xl md:leading-relaxed'>
                    More than 3 years transforming ideas into digital solutions,
                    software developer with a deep enthusiasm for the IT world.
                    My experience covers full-stack web development in React,
                    Node.js, creating high quality web applications, design and
                    performance. allowing me to bring your ideas to the palm of
                    my hand. In the last months I have been dedicated to to the
                    implementation of AI related services such as Microsoft
                    Azure AI, GoApi, Mid Journey, Clip Drop, ChatGpt,
                    Elevenlabs, EdenAI, etc..
                </p>
            </motion.div>
        </>
    )
}
