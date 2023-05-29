import Githublogo from '../Logos/Githublogo'
import Twitterlogo from '../Logos/Twitterlogo'
import Linkedinlogo from '../Logos/Linkedinlogo'

export default function IconContact() {
    return (
        <>
            <a
                href='https://github.com/Pleo2'
                target='_blank'
                rel='noreferrer'
                className={`w-[30px] h-[30px] [&>svg]:fill-gray-300 `}
            >
                <Githublogo />
            </a>

            <a
                href='https://twitter.com/leotwit14'
                target='_blank'
                rel='noreferrer'
                className={`w-[30px] h-[30px] [&>svg]:fill-gray-300 `}
            >
                <Twitterlogo />
            </a>
            <a
                href='https://www.linkedin.com/in/pleo2/'
                target='_blank'
                rel='noreferrer'
                className={`w-[30px] h-[30px] [&>svg]:fill-gray-300 `}
            >
                <Linkedinlogo />
            </a>
        </>
    )
}
