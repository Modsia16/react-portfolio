import React, { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'
import ProjectsInfo from '../assets/data/projects'
import ProjectItem from '../components/ProjectItem'


const ProjectsStyles = styled.div`
padding: 10rem 0;
color: var(--blue);
.projects_grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    margin-top: 2rem;
}
.projects_search {
position: relative;
width: 300px;
margin-top: 2rem;
}
.projects_search input {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border: 3px solid var(--blue);
    border-radius: 5px;
}
.projects_search .searchIcon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    right: 1rem;
    margin-top: 0.25rem;
}
.projects_search .searchIcon path {
    color: var(--blue);
}
@media only screen and (max-width: 768px) {
    .projects_search,
    .projects_search form,
    .projects_search input,
     {
        width: 100%;
    }
}
`;

export default function Projects() {
    const [searchText, setSearchText] = useState('');
    const [projectsData, setProjectData] = useState(ProjectsInfo);

useEffect(() => { 
    if (searchText === '') return; 
    setProjectData(() => 
        ProjectsInfo.filter((item) => 
            item.name.toLowerCase().match(searchText.toLowerCase())
        )
        );
}, [searchText]);    

function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
        setProjectData(ProjectsInfo);
    }
};
    return (
        <>
        <ProjectsStyles>
            <div className="container">
                <SectionTitle heading="Projects" subheading="some of my recent" />
                <div className="projects_search">
                    <form>
                        <input type="text" 
                        placeholder="Search" 
                        value={searchText}
                        onChange={handleChange}/>
                        <MdSearch className="searchIcon" />
                    </form>
                </div>
                <div className="projects_grid">
                    {projectsData.map((item) => (
                        <ProjectItem 
                        key={item.id}
                        title={item.name}
                        desc={item.desc}
                        img={item.img}
                        />
                    ))};
                </div>
            </div>
        </ProjectsStyles>
        </>
    )
}
