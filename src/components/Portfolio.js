import React, { useState } from 'react';

function Portfolio() {

    const [projects] = useState([
        {
            image: 'Ocjade.png',
            alt: 'World of Ocjade Game Website',
            title: 'Ocjade',
            description: 'MVC/JavaScript',
            url: 'http:www.ocjade.com'
        },
        {
            image: 'ServiceTicket.png',
            alt: 'Service Ticket Manager',
            title: 'Service Ticket Manager',
            description: 'JavaScript/Node/MySQL/Handlebars/MVC',
            url: 'https:service-ticket-manager.herokuapp.com'
        },
        {
            image: 'CanIBike.png',
            alt: 'Can I Bike',
            title: 'Can I Bike',
            description: 'OpenWeather/CityBikes API',
            url: 'https:hunterstrunk.github.io/can-i-bike'
        },
        {
            image: 'WeatherVane.png',
            alt: 'Weather Vane',
            title: 'Weather Vane',
            description: 'OpenWeather API',
            url: 'https:russtracy.github.io/Weather-Vane'
        },
        {
            image: 'GitItDone.png',
            alt: 'Git It Done',
            title: 'Git It Done',
            description: 'Server-Side API',
            url: 'https:russtracy.github.io/Git-It-Done'
        },
        {
            image: 'WorkDayScheduler.png',
            alt: 'Workday Scheduler',
            title: 'Workday Scheduler',
            description: 'jQuery/Moment.js',
            url: 'https:russtracy.github.io/Work-Day-Scheduler'
        },
        {
            image: 'TaskMasterPro.png',
            alt: 'TaskMaster Pro',
            title: 'Taskmaster Pro',
            description: 'jQuery/BootStrap',
            url: 'https:russtracy.github.io/Taskmaster-Pro'
        },
        {
            image: 'JavaScriptQuiz.png',
            alt: 'JavaScript Quiz',
            title: 'JavaScript Quiz',
            description: 'JavaScript/Web API',
            url: 'https:russtracy.github.io/JavaScript-Quiz'
        },
        {
            image: 'Taskinator.png',
            alt: 'Taskinator',
            title: 'Taskinator',
            description: 'JavaScript/Web API',
            url: 'https:russtracy.github.io/Taskinator'
        },
        {
            image: 'PasswordGenerator.png',
            alt: 'Password Generator',
            title: 'Password Generator',
            description: 'JavaScript',
            url: 'https:russtracy.github.io/Password-Generator'
        },
        {
            image: 'RunBuddy2.png',
            alt: 'Run Buddy 2.0',
            title: 'Run Buddy 2.0',
            description: 'HTML/CSS',
            url: 'https:russtracy.github.io/Run-Buddy-2'
        },
        {
            image: 'Horiseon.png',
            alt: 'Horiseon Web Servcies',
            title: 'Horiseon',
            description: 'HTML/CSS',
            url: 'https:russtracy.github.io/Horiseon-Project'
        },
        {
            image: 'RunBuddy1.png',
            alt: 'Run Buddy 1.0',
            title: 'Run Buddy 1.0',
            description: 'HTML/CSS',
            url: 'https:russtracy.github.io/Run-Buddy'
        },
        {
            image: 'Recipes.png',
            alt: 'Tracy Recipes Website',
            title: 'Recipe Book',
            description: 'MVC/JavaScript',
            url: 'http:www.russtracy.com'
        }

    ])

    return (

        <div className="container">
            <div className="main">
                {projects.map((project, i) =>
                    <div className="view view-animation" key={i}>
                        <img src={require(`../assets/images/${project.image}`).default} alt={project.alt} />
                        <div className="mask mask-1"></div>
                        <div className="mask mask-2"></div>
                        <div className="content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.url} target="_blank" rel="noreferrer">View Site</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;