'use client'

import {motion} from 'framer-motion'

export default function AbouteMeDesktop() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 1.3}}
        >
            <p className='hidden lg:flex lg:mt-8 lg:text-zinc-400 lg:font-sans lg:text-xl lg:leading-loose'>
                +2 years preparing myself in the area of Computer science in
                specific web development (front-end) especially with libraries
                like React, and css frameworks (tailwind, sass) in operating
                systems like linux(arch, fedora) and wsl(ubuntu).
            </p>
        </motion.div>
    )
}
