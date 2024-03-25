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
        <section
            className={`${style.slider} relative m-auto mt-36 h-[50px] w-[310px] flex items-center justify-start overflow-hidden rounded-mD md:w-[600px] md:mt-52 lg:w-[525px] lg:mt-52 z-10`}
        >
            <div
                className={`${style.slideTrack} flex w-[1000px] relative gap-[30px] fill-gray-200  [&>div:w-[25px]] [&>div:h-25px] `}
            >
                <div
                    className={`${style.slide} slide `}
                >
                    <CssLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <Githublogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <GitLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <HtmlLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <JestLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <JsLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <LinuxLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <NextLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <ReactLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <SassLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <TailwindLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <TestingLibraryLogo />
                </div>
                <div
                    className={`${style.slide} slide `}
                >
                    <TsLogo />
                </div>
            </div>
            <div
                className={`${style.slideTrack} flex w-[1000px] relative gap-[30px] ml-[30px]`}
            >
                <div
                    className={`${style.slide} slide  `}
                >
                    <CssLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <Githublogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <GitLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <HtmlLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <JestLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <JsLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <LinuxLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <NextLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <ReactLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <SassLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <TailwindLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <TestingLibraryLogo />
                </div>
                <div
                    className={`${style.slide} slide  `}
                >
                    <TsLogo />
                </div>
            </div>
        </section>
    )
}
