import React from 'react';

function About() {
    return (
        <section className="container">
            <div className="about">
                <div class="pic">
                    <img className="pic" src={require(`../../assets/images/Russ.jpg`).default} alt="Russ Tracy" />
                </div>
                <div className="text">
                    <h2>Full Stack Web Developer</h2>
                    <p>
                        Web Developer with a certificate in Full Stack Web Development from the University of Utah. I am
                        known as a detail-oriented professional who has been consistently praised as quality-oriented by my
                        co-workers and management.</p>
                    <p>
                        Developed skill set directly relevant to web development, including strong knowledge of HTML, CSS,
                        and scripting languages; experience working with developers remotely to accomplish desired results.
                </p>
                    <p> I am self-motivated and can work alone to meet deadlines or with a team of developers. I have
                    consistently demonstrated teamwork, problem-solving and interpersonal abilities in every aspect
                        of my previous web developer role.</p>
                    <p>
                        I enjoy learning new technologies and am looking for an environment that will allow me to reach my
                        full potential.
                </p>

                </div>
            </div>
        </section>
    );
};

export default About;