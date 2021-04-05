import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../src/assets/css/animation.css';

function Portfolio() {

    const [projects] = useState([
        {
            image: 'Ocjade.png',
            alt: 'World of Ocjade Game Website',
            title: 'Ocjade',
            description: 'MVC / JavaScript',
            url: 'http:www.ocjade.com',
            git: 'http:www.ocjade.com'
        },
        {
            image: 'ServiceTicket.png',
            alt: 'Service Ticket Manager',
            title: 'Service Ticket Manager',
            description: 'JavaScript / Node / MySQL / Handlebars / MVC',
            url: 'https:service-ticket-manager.herokuapp.com',
            git: 'https://github.com/6bodaley6/service-ticket-manager'

        },
        {
            image: 'CanIBike.png',
            alt: 'Can I Bike',
            title: 'Can I Bike',
            description: 'OpenWeather / CityBikes API',
            url: 'https:hunterstrunk.github.io/can-i-bike',
            git: 'https://github.com/hunterstrunk/can-i-bike'
        },
        {
            image: 'BudgetTracker.jpg',
            alt: 'Budget Tracker',
            title: 'Budget Tracker',
            description: 'express / MySQL / Sequelize / dotenv',
            url: 'https://rst-budget-tracker.herokuapp.com/',
            git: 'https://github.com/RussTracy/Budget-Tracker'

        },

        {
            image: 'BitBlog.jpg',
            alt: 'Bit Blog',
            title: 'Bit Blog',
            description: 'express / MySQL / Sequelize / dotenv',
            url: 'https://rst-bit-blog.herokuapp.com/',
            git: 'https://github.com/RussTracy/BIT-Blog'

        },
        {
            image: 'JustTechNews.jpg',
            alt: 'Just Tech News',
            title: 'Just Tech News',
            description: 'express / MySQL / Sequelize / dotenv',
            url: 'https://rst-just-tech-news.herokuapp.com/',
            git: 'https://github.com/RussTracy/Just-Tech-News'

        },
        {
            image: 'NoteTaker.jpg',
            alt: 'Note Taker',
            title: 'Note Taker',
            description: 'express / jest',
            url: 'https://rst-note-taker.herokuapp.com/',
            git: 'https://github.com/RussTracy/Note-Taker'

        },
        {
            image: 'PhoneEntryScreenShot.jpg',
            alt: 'Phone Number Entry',
            title: 'Phone Number Entry',
            description: 'HTML / CSS / JavaScript',
            url: 'https://russtracy.github.io/Phone-Number-Entry/',
            git: 'https://github.com/RussTracy/Phone-Number-Entry'

        },
        {
            image: 'Zookeeper.jpg',
            alt: 'Zookeepr',
            title: 'Zookeepr',
            description: 'express / node / jest',
            url: 'https://rst-zookeeper.herokuapp.com/',
            git: 'https://github.com/RussTracy/Zookeeper'

        },
        {
            image: 'WeatherVane.png',
            alt: 'Weather Vane',
            title: 'Weather Vane',
            description: 'OpenWeather API',
            url: 'https:russtracy.github.io/Weather-Vane',
            git: 'https://github.com/RussTracy/Weather-Vane'
        },
        {
            image: 'GitItDone.png',
            alt: 'Git It Done',
            title: 'Git It Done',
            description: 'Server-Side API',
            url: 'https:russtracy.github.io/Git-It-Done',
            git: 'https://github.com/RussTracy/Git-It-Done'
        },
        {
            image: 'WorkDayScheduler.png',
            alt: 'Workday Scheduler',
            title: 'Workday Scheduler',
            description: 'jQuery / Moment.js',
            url: 'https:russtracy.github.io/Work-Day-Scheduler',
            git: 'https://github.com/RussTracy/Work-Day-Scheduler'
        },
        {
            image: 'TaskMasterPro.png',
            alt: 'TaskMaster Pro',
            title: 'Taskmaster Pro',
            description: 'jQuery / BootStrap',
            url: 'https:russtracy.github.io/Taskmaster-Pro',
            git: 'https://github.com/RussTracy/Taskmaster-Pro'
        },
        {
            image: 'JavaScriptQuiz.png',
            alt: 'JavaScript Quiz',
            title: 'JavaScript Quiz',
            description: 'JavaScript / Web API',
            url: 'https:russtracy.github.io/JavaScript-Quiz',
            git: 'https://github.com/RussTracy/JavaScript-Quiz'
        },
        {
            image: 'Taskinator.png',
            alt: 'Taskinator',
            title: 'Taskinator',
            description: 'JavaScript / Web API',
            url: 'https:russtracy.github.io/Taskinator',
            git: 'https://github.com/RussTracy/Taskinator'
        },
        {
            image: 'PasswordGenerator.png',
            alt: 'Password Generator',
            title: 'Password Generator',
            description: 'JavaScript',
            url: 'https:russtracy.github.io/Password-Generator',
            git: 'https://github.com/RussTracy/Password-Generator'
        },
        {
            image: 'RunBuddy2.png',
            alt: 'Run Buddy 2.0',
            title: 'Run Buddy 2.0',
            description: 'HTML/CSS',
            url: 'https:russtracy.github.io/Run-Buddy-2',
            git: 'https://github.com/RussTracy/Run-Buddy-2'
        },
        {
            image: 'Horiseon.png',
            alt: 'Horiseon Web Servcies',
            title: 'Horiseon',
            description: 'HTML/CSS',
            url: 'https:russtracy.github.io/Horiseon-Project',
            git: 'https://github.com/RussTracy/Horiseon-Project'
        },
        {
            image: 'RunBuddy1.png',
            alt: 'Run Buddy 1.0',
            title: 'Run Buddy 1.0',
            description: 'HTML/CSS',
            url: 'https:russtracy.github.io/Run-Buddy',
            git: 'https://github.com/RussTracy/Run-Buddy'
        },
        {
            image: 'Recipes.png',
            alt: 'Tracy Recipes Website',
            title: 'Recipe Book',
            description: 'MVC/JavaScript',
            url: 'http:www.russtracy.com',
            git: 'http:www.russtracy.com'
        }

    ])

    return (

        <div className="container">
            <h2 className="mTopBottom center">Portfolio</h2>
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
                            <a href={project.git} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={["fab", "github"]} size="1x" color="#ffffff" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;