'use client'
import Title from '@/components/Title'
import {motion} from 'framer-motion'

export default function MainSection() {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}}
            >
                <Title section={'Read My Blog'} />
                    <div className='lg:grid lg:grid-cols-2 lg:item-center lg:h-max lg:w-full lg:m-auto lg:gap-8 lg:mt-8'>
              
                    </div>
            </motion.div>
        </>
    )
}
