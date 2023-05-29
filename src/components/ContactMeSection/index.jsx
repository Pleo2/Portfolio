'use client'
import { motion } from 'framer-motion'
import Title from '../Title'

export default function ContactMeSection({children}) {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1.6}} // 2.2 delay
            >
                <Title section='Contact Me' />
                <div className='mt-4'>
                    <div className='border-[1px] w-max gap-12 m-auto border-zinc-800 p-4 rounded-full flex justify-around mb-4'>
                        {children}
                    </div>
                </div>
            </motion.div>
        </>
    )
}
