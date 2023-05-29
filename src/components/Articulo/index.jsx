export default function Article({project}) {
    return (
        <a target='_blank' rel='noreferrer' href={`${project.link}`}>
            <article className='p-4 md:p-8'>
                <h2 className='z-50 text-2xl text-zinc-200 font-medium duration-500 sm:text-zinc-200 md:text-4xl lg:text-4xl group-hover:text-white font-display'>
                    {project.name}
                </h2>
                <p className='z-20 mt-4 leading-loose text-sm duration-500 text-zinc-400 group-hover:text-zinc-200  md:text-xl md:leading-relaxed lg:text-lg lg:mt-4'>
                    {project.description}
                </p>
            </article>
        </a>
    )
}
