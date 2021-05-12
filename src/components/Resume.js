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
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>responsive design</li>
                        <li>Version Control (Git, TFS)</li>
                        <li>Testing/Debugging (Jest)</li>
                    </ul>
                </div>
                <div className="mAll">
                    <h3>Back-end Skills</h3>
                    <ul className="skillsList">
                        <li>API's</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Handlebars.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                        <li>Stripe</li>
                        <li>C#</li>
                        <li>MVC.net</li>
                        <li>XML</li>
                        <li>XSL</li>
                        <li>JSON</li>
                        <li>REST</li>
                    </ul>
                </div>
                <div className="mAll">
                    <h3>Applications</h3>
                    <ul className="skillsList">
                        <li>Github</li>
                        <li>GitHub Pages</li>
                        <li>Heroku</li>
                        <li>MySQL Workbench</li>
                        <li>Adobe Photoshop</li>
                        <li>Visual Studio 2019</li>
                        <li>Visual Studio Code</li>
                        <li>WalkMe</li>
                        <li>Visio</li>
                        <li>Insomnia</li>
                        <li>Robo 3T</li>
                        <li>Microsoft Suite</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default About;