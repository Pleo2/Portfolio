import Slider from '@/components/Slider'
import AboutMeSection from '@/components/AboutMeSection'
import ProjectsSection from '@/components/ProjectsSection'
import Particles from '@/components/Particles'
import SkillsSection from '@/components/SkillsSection'
import ContactMeSection from '@/components/ContactMeSection'
import SectionCvDesktop from '@/components/section-Cv-desktop'
import IconContact from '@/components/IconContact'
import LinkSocialIcons from '@/components/LinkSocialIcons'
import {projects} from '@/mock/projects'
import {skills} from '@/mock/skills'
import AbouteMeDesktop from '../components/AbouteMeDesktop'

export default function Home() {
    return (
        <>
            <main className={`flex h-max flex-col overflow-x-hidden`}>
                <Slider />
                <Particles/>
                <section className='flex flex-col justify-center w-[310px] m-auto md:w-[600px] lg:w-[900px]'>
                    <SectionCvDesktop />
                    <AboutMeSection />
                    <AbouteMeDesktop />
                    <LinkSocialIcons />
                    <ProjectsSection projects={projects} />
                    <SkillsSection skills={skills} />
                    <ContactMeSection>
                        <IconContact />
                    </ContactMeSection>
                </section>
            </main>
        </>
    )
}
