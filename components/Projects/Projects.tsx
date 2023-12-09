import React from "react"
import SectionHeading from "@/components/SectionHeading";
import {projectsData} from "@/lib/data";
import Project from "@/components/Projects/Project";


const Projects = () => {

    return (
        <section id="projects" className="scroll-mt-28 mb-28 text-center" role="region" aria-labelledby="projects-heading">
            <SectionHeading>My Projects</SectionHeading>

            <div>
                {
                   projectsData.map((project, index) => (
                       <React.Fragment key={index}>
                           <Project {...project}/>
                       </React.Fragment>
                   ))
                }
            </div>
        </section>
    )
}

export default Projects