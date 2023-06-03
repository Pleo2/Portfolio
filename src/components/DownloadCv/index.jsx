import Link from 'next/link'
import Card from '../Card'

export default function DownloadCv() {
    return (
        <>
            <div className='absolute left-0 right-0 m-auto top-[8.6rem] ml-[4.5rem] sm:ml-[8rem] md:top-[10.6rem] lg:relative lg:m-0 lg:top-0 lg:ml-0 lg:mt-0'>
                <Card>
                    <div className='w-full flex mt-1 justify-center items-center'>
                        <Link
                            href='/Jose_Moreno-CV.pdf'
                            target='_blank'
                            className='font-display text-xl text-zinc-200 px-4 hover:text-white duration-500 md:text-2xl'
                        >
                            Download-CV
                        </Link>
                    </div>
                </Card>
            </div>
        </>
    )
}
