'use client'
import {motion} from 'framer-motion'
import Title from '../Title'

export default function SkillsSection({skills}) {
    return (
        <>
            <motion.article
                style={{ zIndex: 100}}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}} // 2.2 delay
            >
                <Title section={'Skills'} />
                <ul className='mt-4 font-sans w-full text-zinc-400 leading-8 [&>li]:rounded-lg [&>li]:border [&>li]:border-zinc-600 [&>li]:px-4 [&>li]:mt-2 flex flex-wrap gap-4 justify-center cursor-pointer'>
                    {skills.map((item, index) => {
                        return (
                            <li
                                key={item.skill + index}
                                className={`duration-500 hover:bg-gradient-to-r hover:text-white md:text-xl md:p-1`}
                            >
                                {item.skill}
                            </li>
                        )
                    })}
                </ul>
            </motion.article>
        </>
    )
}
