'use client'
import {motion} from 'framer-motion'
import Title from '../Title'

export default function SoftSkillsSection({softSkills}) {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1.7}} // 2.2 delay
            >
                <Title section={'Soft Skills'} />
                <ul className='mt-4 font-sans w-full text-zinc-400 leading-8 [&>li]:rounded-lg [&>li]:border [&>li]:border-zinc-600 [&>li]:px-2 [&>li]:mt-1 flex flex-wrap gap-4 justify-between md:justify-center'>
                    {softSkills.map(item => (
                        <li
                            key={item}
                            className='duration-700 hover:bg-zinc-800/30 w-max md:text-2xl md:p-2'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </>
    )
}
