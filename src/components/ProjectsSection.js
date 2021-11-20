import React from 'react'
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import SectionTitle from './SectionTitle';
import ProjectItem from './ProjectItem';
import projects from '../assets/data/projects'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation]);

const ProjectsSectionStyled = styled.div`
color: var(--blue);

`;

export default function ProjectsSection() {
    return (
        <ProjectsSectionStyled>
            <div className="container">
                <SectionTitle heading="Projects" subheading="some of my recent work" />
            <div className="projects__allItems">
                <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                    },
                }}
                >
                    {projects.map((project, index) => {
                        // eslint-disable-next-line array-callback-return
                        if (index >= 3) return;
                            return (
                        <ProjectItem />
                        )
                    })}
                    </Swiper>
            </div>
         </div>
        </ProjectsSectionStyled>
    )
}

