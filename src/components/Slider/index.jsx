import CssLogo from '../Logos/Csslogo'
import Githublogo from '../Logos/Githublogo'
import GitLogo from '../Logos/Gitlogo'
import HtmlLogo from '../Logos/Htmllogo'
import JestLogo from '../Logos/Jestlogo'
import JsLogo from '../Logos/Jslogo'
import LinuxLogo from '../Logos/Linuxlogo'
import NextLogo from '../Logos/Nextlogo'
import ReactLogo from '../Logos/Reactlogo'
import SassLogo from '../Logos/Sasslogo'
import TailwindLogo from '../Logos/Tailwindlogo'
import TestingLibraryLogo from '../Logos/TestingLibrarylogo'
import TsLogo from '../Logos/Tslogo'
import style from './animation-slider.module.css'

export default function Slider() {
    return (
        <div
            className={`${style.slider} relative m-auto mt-24 h-[50px] w-[310px] flex items-center justify-start overflow-hidden rounded-md md:w-[600px] md:mt-44 lg:w-[525px] lg:mt-44`}
        >
            <div
                className={`${style.slideTrack} flex w-[1000px] relative gap-[30px]`}
            >
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <CssLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <Githublogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <GitLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <HtmlLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <JestLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <JsLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <LinuxLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <NextLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <ReactLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <SassLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <TailwindLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <TestingLibraryLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <TsLogo />
                </div>
            </div>
            <div
                className={`${style.slideTrack} flex w-[1000px] relative gap-[30px] ml-[30px]`}
            >
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <CssLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <Githublogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <GitLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <HtmlLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <JestLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <JsLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <LinuxLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <NextLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <ReactLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <SassLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <TailwindLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <TestingLibraryLogo />
                </div>
                <div
                    className={`${style.slide} slide w-25px h-[25px] [&>svg]:fill-gray-200 `}
                >
                    <TsLogo />
                </div>
            </div>
        </div>
    )
}
