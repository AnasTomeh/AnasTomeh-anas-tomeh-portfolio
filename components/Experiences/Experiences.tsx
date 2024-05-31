import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Experiences/Timeline";
import {experiencesData} from "@/lib/data";
import React from "react";

const Experiences = () => {

    return (
        <section
            id="experience"
            role="region"
            aria-labelledby="experience-heading"
            className="max-w-[60rem]  items-center text-center scroll-mt-28 mb-16 sm:mb-30">
            <SectionHeading>My Experiences</SectionHeading>
           <div className="mt-[80px] flex flex-col items-center">
               {experiencesData.map((experience) => (
                   <React.Fragment  key={experience.id}>
                       <Timeline {...experience}/>
                   </React.Fragment>
               ))}
           </div>
        </section>
    )
}

export default Experiences