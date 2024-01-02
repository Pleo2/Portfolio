'use client'
import {motion} from 'framer-motion'
import Title from '../Title'
import Card from '../Card'
import Articulo from '../Articulo'

export default function ProjectsSection({projects}) {

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}}
                className='lg:mt-20'
            >
                <Title section={'Projects'} />
                <div className='lg:grid lg:grid-cols-2 lg:item-center lg:h-max lg:w-full lg:m-auto lg:gap-8 lg:mt-8'>
                    { projects.map((project, index) => 
                        <Card  key={index} >
                            <Articulo project={project}></Articulo>
                        </Card>
                    )}
                </div>
            </motion.div>
        </>
    )
}
