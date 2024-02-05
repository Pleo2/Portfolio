'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname()

    return (
        <div className=' m-auto w-full h-auto py-1 flex justify-center gap-4 font-sans z-100'>
            <Link href='/' style={{ color: pathname === '/' ? 'red' : "gray"}} className='cursor-pointer'>Porfolio</Link>
            <Link href='/blog' style={{ color: pathname === '/blog' ? 'red' : "gray" }} className='cursor-pointer'>blog</Link>
        </div>
    )
}
