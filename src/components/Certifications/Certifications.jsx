import React from 'react'
import './Certifications.css'
import { Pagination } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const Data=[
    {
        id:1,
        title: "DSA",
        description: "500+ DSA questions on LeetCode."
    },
    {
        id:2,
        title: "BoS Member",
        description: "Board of Studies member coordinator of MAC department, MITS, Gwalior."
    },
    {
        id:3,
        title: "JavaScript Certification",
        description: "JavaScript Certification from Infosys Springboard."
    },
    {
        id:4,
        title: "CSS3 Certification",
        description: "CSS3 Certification from Infosys Springboard.",
        
    },
    {
        id:5,
        title: "Angular Certification",
        description: "Angular Certification from Infosys Springboard."
    },
    {
        id:6,
        title: "TypeScript Certification",
        description: "TypeScript Certification from Infosys Springboard."
    }
]
const Certifications = () => {
    return(
        <section className="testimonials container section" id="certifications">
            <h2 className="section__title">Certifications and Achievements</h2>
            <Swiper className="testimonials__container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{clickable: true}}
                loop={true}
                grabCursor={true}
            
            >
                {Data.map(({ id, title, description}) => {
                return (
                    <SwiperSlide className="testimonial__item" key={id}>
                        <h3 className="testimonials__title">
                            {title}
                        </h3>
                        <div className ="description">{description}</div>

                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
    )
}
export default Certifications;