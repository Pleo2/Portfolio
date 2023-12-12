import './globals.css'
import Header from '../components/Header/'
// import Particles from '@/components/Particles'
import {Inter} from 'next/font/google'
import localFont from 'next/font/local'
import { SpeedInsights } from '@vercel/speed-insights/*'

const inter = Inter({subsets: ['latin'], variable: '--font-inter'})
const calSans = localFont({
    src: '../../public/CalSans-SemiBold.woff2',
    variable: '--font-calSans',
})

export const metadata = {
    title: 'Pleo2 Portfolio',
    description: 'My personal Portfolio Web developer',
}

export default function RootLayout({children}) {
    return (
        <html lang='en' className={`${calSans.variable} ${inter.variable}`}>
            <head>
                <link rel='icon' href='/icon.svg' />
            </head>
            <body>
                <Header />                
                {children}
                <SpeedInsights/>
            </body>
        </html>
    )
}
