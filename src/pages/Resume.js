import React from 'react'
//import { Document, Page } from 'react-pdf'
import styled from 'styled-components'
import PText from '../components/PText'

const ResumeSectionStyle = styled.div`
background-color: var(--dark-slate-grey);
color: var(--white);
padding: 2rem;
font-family: 'Roboto', 'Spectral SC', sans-serif;
button {
    font-family: 'Roboto', 'Spectral SC', sans-serif;
    font-size: 1.5rem;
    background-color: ${(props) => props.outline ? 'transparent' : 'var(--light-grey)'};
    color: ${(props) => props.outline ? 'var(--grey)' : 'var(--blue)'};
    padding: 1rem 2rem;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--grey);
    text-decoration: none;
    @media only screen and (max-width: 768px) {
        .button {
            font-size: 1.2rem;
        }
    }
}
.resumeDl__wrapper {
    background-color: var(--blue);
    color: var(--white);
    margin-top: 5rem;
    border-radius: 5px;
    padding: 2rem;
    text-align: center;
}
.resume__heading {
    font-size: 2rem;
    margin: 4rem 0;
    text-align: center;
}
.resume__contact {
    text-align: right;
    margin-top: 2rem;
}
.resume__name {
    font-size: 2rem;
    margin: 2rem 0;
}
.resume__sub{
    font-size: 1.5rem;
    margin: 2rem 0;
}
.area_sub .area_subhead {
    font-size: 1.5rem;
    margin-right: 10rem;
}

@media screen only screen and (max-width: 768px) {
    .resume__heading {
        font-size: 1.5rem;
    }
`

export default function Resume() {
    return (
        <>
        <ResumeSectionStyle>
        <div className="container">
            <div className="resumeDl__wrapper">
                <PText>
                 <button btnText="Resume" btnLink="#" docDl="./docs/resumecld.pdf" >
                     <a href="./docs/resumecld.pdf" download>Resume</a>
                    </button>
                </PText>
            </div>
            <div className="resume__contact">
                <ul>
                <li>phone</li>
                <li>email</li>
                <li>github</li>
                <li>linkedin</li>
                </ul>
            </div>
            <div>
                <h1 className="resume__name">Carina Diaz</h1>
            </div>

            <div className="resume__body">
                <h2>Intro</h2>
                <br></br>
                <p>
                Accomplished coordinator and administrator with experience in providing support
                to high-level operations and leadership for 8+ years. Helped with everything
                from facility representative, to data entry and preparing well-researched
                documents. Skilled at time-management, MS Office and seeking to balance my
                professional experience with my software development skills.
                </p>
                <div>
                <h2 className="resume__sub">Education</h2>
                </div>
                <div>
                <h4 className="area_subhead">UC Davis, Davis, California June 2021 - December 2021</h4>
                <h5 className="area_sub">Full Stack Web Developer Certification</h5>
                    <ul>
                        <li>Front end and back end technology education</li>
                        <li>Browser Based Technologies and Databases</li>
                        <li>Computer Science applied to JavaScript</li>
                        <li>Server Side Development</li>
                        <li>API Interaction</li>
                    </ul>
                        <br /><br />
                <h4 className="area_subhead">CSU Stanislaus, Turlock, California January 2016 - May 2020</h4>
                <h5 className="area_sub">Bachelors of Science, Haelth Science</h5>
                    <ul>
                        <li>Focus on health care leadership and administration</li>
                        <li>Work effectively within health care systems and/or organizations</li>
                        <li>Employ evidence-based practice</li>
                        <li>Apply quality improvement</li>
                        <li>Implement and evaluate programs relating to health in a multicultural society</li>
                    </ul>
                        <br /><br />
                <h4 className="area_subhead">San Joaquin Delta College, Stockton, California January 2010 - May 2016</h4>
                <h5 className="area_sub">Associates of Science, Mathematics and Scienc</h5>
                    <ul>
                        <li>Interdisciplinary studies of mathematics and science</li>
                        <li>Focus on biology and chemistry</li>
                    </ul>
                </div>
                <div>
                <h2 className="resume__sub">Skills</h2>
                </div>
                <div>
                <h4 className="area_subhead">Computer Science, Browser Based Technologies and Databases</h4>
                    <p>HTML/CSS, JavaScript/jQuery, Git, Responsive Design, Bootstrap, Handlebars,
                        Local Storage, Session Storage, IndexedDB, React.js, MySQL, NoSQL, User
                        Authentication, Progressive Web Applications PWAs, MERN Stack MongoDB,
                        Express.js, React.js, Node.js, API, JSON, AJAX, Algorithms Searches, Sorts,
                        Big O Notation, data Structures, Microsoft Office</p>
                        <br /><br />
                <h4 className="area_subhead">Interdisciplinary Professional Skills</h4>
                    <p>Office management and administration, Data entry, Scheduling and Time Management,
                        Research skills, Problem solving, Detail oriented, Leadership, Communication,
                        Project management, Process improvement, Purchasing, Inventory control, Customer
                        service, Record keeping, Trainer
                        </p>
                        <br /><br />
                <h4 className="area_subhead">San Joaquin Delta College, Stockton, California January 2010 - May 2016</h4>
                </div>
                <div>
                <h2 className="resume__sub">Work Experience</h2>
                </div>
                <div>
                <h4 className="area_subhead">Health And Safety Coordinator — One Community Health, Sept 2020 - Sept 2021</h4>
                    <p>Managed Health and Safety programs for regulatory compliance and injury
                        reduction. Gather and interpret data to identify and prevent issues before they
                        cause major problems. Developed and coordinated departmental projects that
                        contributed to equipment design changes. Business system modifications and
                        revised employee work habits. As co-instructor for behavior-based safety
                        process, trained and coached facility-wide staff employees and managers.
                        Participated on the Executive Leadership Committees as well the Safety Committee
                        lead that developed action plans for safety improvement and injury reduction.
                        Hazard analysis, safety audits, and evaluated work job task requirements.</p>
                        <br /><br />
                <h4 className="area_subhead">Compliance Coordinator — Cintas Corporation, June 2017 - Sept 2020, Stockton, CA</h4>
                    <p>Promoted to the role of Compliance Coordinator. Health and Safety Coordinator
                        HSC duties, data management, maintenance coordinator, environmental and
                        regulatory compliance administrator, accomplish organizational goals, manage
                        critical staff, track and evaluate leading/lagging indicators, accident
                        investigation, training coordinator and team lead. Assist HR with workers
                        compensation reporting and representation tasks.</p>
                        <br /><br />
                <h4 className="area_subhead">Maintenance Administrator — Cintas Corporation, Dec 2014 - June 2017, Stockton, CA</h4>
                    <p>Promoted to maintenance administrator. Supervisor assistant, database and
                        document management. Scheduling staff and contractors, safety inspections,
                        managed facility SharePoint site. Maintenance department health, safety, and
                        regulatory compliance lead
                        </p>
                        <br /><br />
                <h4 className="area_subhead">Quality Assurance — Cintas Corporation, Jan 2010 - Dec 2014, Stockton, CA</h4>
                    <p>Monitor quality of customer return products, maintain inventory, delivery
                        scheduling, department safety and training coordination</p>
                </div>
            </div>
        </div>
    </ResumeSectionStyle>  
    </>    
    )
}