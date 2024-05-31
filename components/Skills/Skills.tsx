"use client";

import SectionHeading from "@/components/SectionHeading";
import {skillsData, transferableSkillsData} from "@/lib/data";

import SkillsList from "@/components/Skills/SkillsList";


const Skills = () => {


    return (
        <section id="skills" className="mb-15 max-w-[53rem] scroll-mt-28 text-center sm:mb-20" role="region" aria-labelledby="skills-heading">
            <SectionHeading>My Skills</SectionHeading>
            <SkillsList title={"Technical Skill"} skills={skillsData}/>
            <SkillsList title={"Transferable Skill"} skills={transferableSkillsData}/>
        </section>
    )
}


export default Skills;