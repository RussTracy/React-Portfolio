import React from 'react';

function About() {
    return (
        <section className="container">
            <h2 className="mAll">Resume</h2>
            <div className="mLeftRight">Download my <a href={require(`../assets/downloads/RussTracyResume.pdf`).default}>Resume</a></div>
            <div className="resume">
                <div className="mAll">
                    <h3>Front-end Skills</h3>
                    <ul className="skillsList">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="mAll">
                    <h3>Back-end Skills</h3>
                    <ul className="skillsList">
                        <li>API's</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default About;