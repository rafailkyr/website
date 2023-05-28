import React from 'react'
import './About.css'
import '../../App.css'
import '../../index.css'

function About() {

    return (
        <article className="about active" data-page="about">

            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">

                <p>
                Hello, my name is Rafail, and I am a dedicated maritime student. 
                Currently pursuing a Bachelor degree in Maritime Economics, 
                I am eager to embark on a career in the shipping industry to gain practical 
                working experience and expand my knowledge. With excellent communication skills 
                and a natural ability to adapt to challenging and high-pressure environments, 
                I am equipped to contribute effectively to a shipping company's operations. 
                I am driven to thrive in a dynamic industry and passionate about making a positive 
                impact through my analytical thinking and problem-solving abilities.
                </p>

            </section>
            
            {/*Resume*/}
            <div className='resume'>
                <article className="resume" data-page="resume"></article>

                <header>
                <h2 className="h2 article-title">Resume</h2>
                </header>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Maritime Studies</h4>
                            <span>2019-present</span>
                            <p className="timeline-text">
                                University of Piraeus
                            </p>
                        </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">High School</h4>
                            <span>Graduated Class of 2019</span>
                            <p className="timeline-text">
                                Makryhori, Larissa
                            </p>
                        </li>

                    </ol>

                </section>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="briefcase-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Agricultural Cooperative, Larissa, Greece</h4>
                            <span>Summer Positions: 2018-2022</span>
                            <p className="timeline-text">
                                Managed financial transactions and 
                                maintained accurate records for the agricultural cooperative.
                            </p>
                        </li>

                    </ol>

                </section>

                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                        <ion-icon name="construct-outline"></ion-icon>
                        </div>

                        <h3 className="h3">Skills</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">
                            <p className="skills-item-title">Fluent in English (written and spoken)</p>
                        </li>

                        <li className="timeline-item">
                            <p className="skills-item-title">Excellent communication skills</p>
                        </li>

                        <li className="timeline-item">
                            <p className="skills-item-title">Ability to work effectively in a team as well as independently</p>
                        </li>

                        <li className="timeline-item">
                            <p className="skills-item-title">Basic knowledge of Microsoft Office Suite (Word, Excel, PowerPoint)</p>
                        </li>

                    </ol>

                </section>
            </div>

        </article>

    )
}

export default About