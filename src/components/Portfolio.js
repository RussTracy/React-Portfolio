import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../src/assets/css/animation.css';

function Portfolio() {

    const [projects] = useState([
        {
            image: 'Ocjade.png',
            alt: 'World of Ocjade Game Website',
            title: 'Ocjade',
            description: 'A hobby gaming site I use to keep my coding skills sharp and have a little fun as well.',
            code: ' (MVC / JavaScript)',
            url: 'http:www.ocjade.com',
            git: 'http:www.ocjade.com'
        },
        {
            image: 'ChattyCathy.jpg',
            alt: 'Chatty Cathy',
            title: 'Chatty Cathy',
            description: 'An instant bi-directional chat application to let logged in users converse in real time.',
            code: '(MERN / Socket.io)',
            url: 'https://stark-escarpment-67979.herokuapp.com/',
            git: 'https://github.com/mhowe21/ChattyCathy'

        },
        {
            image: 'ServiceTicket.png',
            alt: 'Service Ticket Manager',
            title: 'Service Ticket Manager',
            description: 'A support ticket management system to let users submit issues and have them fixed.',
            code: '(JavaScript / Node / MySQL / Handlebars / MVC)',
            url: 'https://service-ticket-manager.herokuapp.com/',
            git: 'https://github.com/6bodaley6/service-ticket-manager'

        },
        {
            image: 'CanIBike.png',
            alt: 'Can I Bike',
            title: 'Can I Bike',
            description: 'App that allows a user to find bike stations and check the local weather conditions.',
            code: '(OpenWeather API / CityBikes API)',
            url: 'https:hunterstrunk.github.io/can-i-bike',
            git: 'https://github.com/hunterstrunk/can-i-bike'
        },
        {
            image: 'BudgetTracker.jpg',
            alt: 'Budget Tracker',
            title: 'Budget Tracker',
            description: 'Progressive web app that allows for adding and subtracting money from a budget.',
            code: '(Express / MySQL / Sequelize / dotenv)',
            url: 'https://rst-budget-tracker.herokuapp.com/',
            git: 'https://github.com/RussTracy/Budget-Tracker'

        },

        {
            image: 'BitBlog.jpg',
            alt: 'Bit Blog',
            title: 'Bit Blog',
            description: 'Blog site where developers can publish posts and comment on other developer posts.',
            code: '(Express / MySQL / Sequelize / dotenv)',
            url: 'https://rst-bit-blog.herokuapp.com/',
            git: 'https://github.com/RussTracy/BIT-Blog'

        },
        {
            image: 'JustTechNews.jpg',
            alt: 'Just Tech News',
            title: 'Just Tech News',
            description: 'Tech news site that allows users to post news articles and start discussions about them.',
            code: '(Express / MySQL / Sequelize / dotenv)',
            url: 'https://rst-just-tech-news.herokuapp.com/',
            git: 'https://github.com/RussTracy/Just-Tech-News'

        },
        {
            image: 'NoteTaker.jpg',
            alt: 'Note Taker',
            title: 'Note Taker',
            description: 'App that allows a user to add notes or tasks. Notes can be edited or removed as needed.',
            code: '(Express / Jest)',
            url: 'https://rst-note-taker.herokuapp.com/',
            git: 'https://github.com/RussTracy/Note-Taker'

        },
        {
            image: 'PhoneEntryScreenShot.jpg',
            alt: 'Phone Number Entry',
            title: 'Phone Number Entry',
            description: 'Solution to an interview question. Placeholder text needed to stay visible while typing.',
            code: '(HTML / CSS / JavaScript)',
            url: 'https://russtracy.github.io/Phone-Number-Entry/',
            git: 'https://github.com/RussTracy/Phone-Number-Entry'

        },
        {
            image: 'Zookeeper.jpg',
            alt: 'Zookeepr',
            title: 'Zookeepr',
            description: 'App allows users to find and add animals or zookeepers to a mock zoo front page website',
            code: '(Express / Node / Jest)',
            url: 'https://rst-zookeeper.herokuapp.com/',
            git: 'https://github.com/RussTracy/Zookeeper'

        },
        {
            image: 'WeatherVane.png',
            alt: 'Weather Vane',
            title: 'Weather Vane',
            description: 'Weather forecast application using Server-Side API,s. History is stored in localstorage.',
            code: '(OpenWeather API / HTML / CSS)',
            url: 'https:russtracy.github.io/Weather-Vane',
            git: 'https://github.com/RussTracy/Weather-Vane'
        },
        {
            image: 'GitItDone.png',
            alt: 'Git It Done',
            title: 'Git It Done',
            description: 'GitHub search site that allows users to find open issues by github user or by topic.',
            code: '(Server-Side API / HTML / CSS)',
            url: 'https:russtracy.github.io/Git-It-Done',
            git: 'https://github.com/RussTracy/Git-It-Done'
        },
        {
            image: 'WorkDayScheduler.png',
            alt: 'Workday Scheduler',
            title: 'Workday Scheduler',
            description: 'Calendar app for scheduling your work day. Uses localstorage for saving events.',
            code: '(jQuery / Moment.js / Bootstrap)',
            url: 'https:russtracy.github.io/Work-Day-Scheduler',
            git: 'https://github.com/RussTracy/Work-Day-Scheduler'
        },
        {
            image: 'TaskMasterPro.png',
            alt: 'TaskMaster Pro',
            title: 'Taskmaster Pro',
            description: 'Task tracking application that uses localstorage to save, edit, delete task events.',
            code: '(jQuery / BootStrap / HTML)',
            url: 'https:russtracy.github.io/Taskmaster-Pro',
            git: 'https://github.com/RussTracy/Taskmaster-Pro'
        },
        {
            image: 'JavaScriptQuiz.png',
            alt: 'JavaScript Quiz',
            title: 'JavaScript Quiz',
            description: 'Timed quiz application for testing your knowledge of the JavaScript language.',
            code: '(HTML / CSS / JavaScript / Web API)',
            url: 'https:russtracy.github.io/JavaScript-Quiz',
            git: 'https://github.com/RussTracy/JavaScript-Quiz'
        },
        {
            image: 'Taskinator.png',
            alt: 'Taskinator',
            title: 'Taskinator',
            description: 'Simple task tracking app that uses local storage to create, save, edit and delete tasks.',
            code: '(JavaScript / Web API)',
            url: 'https:russtracy.github.io/Taskinator',
            git: 'https://github.com/RussTracy/Taskinator'
        },
        {
            image: 'PasswordGenerator.png',
            alt: 'Password Generator',
            title: 'Password Generator',
            description: 'Simple password generator with options for length, letter case, numbers and symbols.',
            code: '(JavaScript / HTML / CSS)',
            url: 'https:russtracy.github.io/Password-Generator',
            git: 'https://github.com/RussTracy/Password-Generator'
        },
        {
            image: 'RunBuddy2.png',
            alt: 'Run Buddy 2.0',
            title: 'Run Buddy 2.0',
            description: 'Code refactor of the original Run Buddy site for accessibility and responsiveness.',
            code: '(HTML / CSS)',
            url: 'https:russtracy.github.io/Run-Buddy-2',
            git: 'https://github.com/RussTracy/Run-Buddy-2'
        },
        {
            image: 'Horiseon.png',
            alt: 'Horiseon Web Servcies',
            title: 'Horiseon',
            description: 'Code refactor of the original Horiseon site for accessibility and responsiveness.',
            code: '(HTML / CSS)',
            url: 'https:russtracy.github.io/Horiseon-Project',
            git: 'https://github.com/RussTracy/Horiseon-Project'
        },
        {
            image: 'RunBuddy1.png',
            alt: 'Run Buddy 1.0',
            title: 'Run Buddy 1.0',
            description: 'First edition of the Run Buddy site to learn HTML and CSS.',
            code: '(HTML / CSS)',
            url: 'https:russtracy.github.io/Run-Buddy',
            git: 'https://github.com/RussTracy/Run-Buddy'
        },
        {
            image: 'Recipes.png',
            alt: 'Tracy Recipes Website',
            title: 'Recipe Book',
            description: 'Recipe application that I created for my wife to store, find and print family recipes.',
            code: '(MVC / JavaScript)',
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
                            <p>{project.description}<br /><span>{project.code}</span></p>
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