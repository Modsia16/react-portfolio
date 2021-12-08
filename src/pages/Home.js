import React from 'react';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ResumeSection from '../components/ResumeSection';

export default function Home() {
    return (
        <div>
            <IntroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <ResumeSection />
        </div>
    );
}

