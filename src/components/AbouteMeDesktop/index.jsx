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
                + 2 años transformando ideas en soluciones digitales, desarrollador de software con un profundo entusiasmo por el mundo de la informática. Mi experiencia abarca el desarrollo web full-stack en React, Node.js, Spring Boot , creando aplicaciones web de alta calidad, diseño y rendimiento. Además, domino Flutter para el desarrollo mobile, permitiéndo me llevar tus ideas a la palma de la mano.
            </p>
        </motion.div>
    )
}
