'use client'
import {motion} from 'framer-motion'
import Title from '../Title'

export default function SkillsSection({skills}) {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1.6}} // 2.2 delay
            >
                <Title section={'Skills'} />
                <ul className='mt-4 font-sans w-full text-zinc-400 leading-8 [&>li]:rounded-lg [&>li]:border [&>li]:border-zinc-600 [&>li]:px-4 [&>li]:mt-2 flex flex-wrap gap-4 justify-center'>
                    {skills.map((item, index) => {
                        const color = `from-${item.color}`
                        return (
                            <li
                                key={item.skill + index}
                                className={`duration-500 hover:bg-gradient-to-r ${color} hover:text-white md:text-xl md:p-1`}
                            >
                                {item.skill}
                            </li>
                        )
                    })}
                </ul>
            </motion.div>
        </>
    )
}
