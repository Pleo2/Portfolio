import Link from 'next/link'
import Card from '../Card'

export default function DownloadCv() {
    return (
        <>
            <div className='absolute left-6 right-0 m-auto top-[11.8rem] ml-[4.5rem] sm:ml-[8rem] md:top-[13rem] md:ml-[8rem] lg:relative lg:m-0 lg:top-0 lg:ml-0 lg:mt-0'>
                <Card>
                    <div className='w-full flex mt-1 justify-center items-center'>
                        <Link
                            href='/JoseMoreno-Full-Stack-Web-Developer.pdf'
                            target='_blank'
                            className='font-display text-xl text-zinc-200 px-2 hover:text-white duration-500 md:text-2xl'
                        >
                            Download-CV
                        </Link>
                    </div>
                </Card>
            </div>
        </>
    )
}
