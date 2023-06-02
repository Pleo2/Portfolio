'use client'
import { useRef} from 'react'
import {motion} from 'framer-motion'
import Title from '../Title'
import Card from '../Card'
import Articulo from '../Articulo'
import Reactlogo from '../Logos/Reactlogo'
import Jslogo from '../Logos/Jslogo'
import TestingLibrarylogo from '../Logos/TestingLibrarylogo'
import Csslogo from '../Logos/Csslogo'
import useVideoPlayer from './useVideoPlayer'

export default function ProjectsSection({projects}) {
    const videoRef = useRef(null)
    const {setPlay} = useVideoPlayer({videoRef})

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1.5}}
                className='lg:mt-20'
            >
                <Title section={'Projects'} />
                <div className='lg:grid lg:grid-cols-2  lg:item-center lg:h-max lg:w-full lg:m-auto lg:gap-8 lg:mt-8'>
                    <Card key={projects[0].description}>
                        <Articulo project={projects[0]} />
                        <div className='hidden sm:hidden md:hidden lg:flex lg:bg-black lg:h-48 lg:w-[21rem] lg:ml-8 lg:mb-8 lg:rounded-xl lg:cursor-pointer lg:hover:bg-zinc-700 z-40'>
                            <video
                                onMouseEnter={() => {setPlay(true)}}
                                onMouseLeave={() => {setPlay(false)}}
                                ref={videoRef}
                                muted
                                id='giphyVideo'
                                className='opacity-50 w-full h-full rounded-xl object-fill giphyVideo hover:opacity-100 hover:scale-105 transition-transform duration-500'
                            >
                                <source src='/giphy.mp4' />
                            </video>
                        </div>
                        <div className='hidden sm:hidden md:hidden lg:flex gap-4 [&>svg]:w-10 [&>svg]:fill-zinc-400 mb-8 mt-12 justify-start pl-8'>
                            <Reactlogo />
                            <Jslogo />
                            <TestingLibrarylogo />
                            <Csslogo />
                        </div>
                    </Card>
                    <Card key={projects[1].description}>
                        <Articulo project={projects[1]} />
                    </Card>
                    <Card key={projects[2].description}>
                        <Articulo project={projects[2]} />
                    </Card>
                </div>
            </motion.div>
        </>
    )
}
