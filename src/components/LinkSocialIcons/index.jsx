'use client'
import {motion} from 'framer-motion'
import IconContact from '@/components/IconContact'

export default function LinkSocialIcons() {
    return (
        <>
            <motion.div
                className='flex justify-center mt-6 gap-6 z-20 mb-4 lg:hidden'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}}
            >
                <IconContact />
            </motion.div>
        </>
    )
}
