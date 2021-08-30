import HTML5Logo from "./images/html5logo.png"
import CSSLogo from "./images/CSSLogo.png"
import ExpressLogo from "./images/expressLogo.png"
import JSLogo from "./images/JSLogo.png"
import MongoDBLogo from "./images/MongoDBLogo.png"
import NodeJSLogo from "./images/NodeJSLogo.png"
import ReactLogo from "./images/ReactLogo.png"
import GraphQLLogo from "./images/GraphQLLogo.png"
import GitHubLogo from "./images/githubLogo.png"
import LinkedInLogo from "./images/linkedInLogo.png"
import MySQLLogo from "./images/mysqlLogo.png"
import codepenLogo from "./images/codepenLogo.png"
//ScreenShots
import PasswordGen from "./images/PasswordGen.png"
import WeatherApp from "./images/WeatherApp.png"
import WorkDayScheduler from "./images/WorkDayScheduler.png"
import HomeKitchenPro from "./images/HomeKitchenPro.png"
import NoteTaker from "./images/NoteTaker.png"
import FitnessTracker from "./images/FitnessTracker.png"
import Dufos from './images/dufos.png'

export default {
    name: "Richard Crippen",
    headerbackground: "I was born and raised in Atlanta and have worked in the financial sevices industry for the last 20 years. I decided to learn about web development as an opportunity to do something different with my career.",
    contactEmail: 'richard.crippen@gmail.com',

    projects: [
        {
            title: 'JavaScript Password Generator',
            description: 'This app is a password generator that will randomly create a password between 8 and 25 characters for you and can include both upper and lower case letters, numbers, and special characters. This app was designed using JavaScript, HTML, and CSS to complete it.',
            screenShot: PasswordGen,
            url: 'https://github.com/rickyonthephone/JavaScript_Password_Generator/tree/master/assets',
            deployment:false,
            deploymentUrl:''
        },
        {
            title: 'Weather Dashboard',
            description: 'This weather dashboard was created using a weather API and has the ability to search weather by city name. The app provides current weather data as well as a 5 day forecast for the selected city. This app highlights usage of a third party API, usage of JavaScript/HTML/CSS, and uses local storage to save city search data.',
            screenShot: WeatherApp,
            url: 'https://github.com/rickyonthephone/Weather_Dashboard',
            deployment:false,
            deploymentUrl:''
        },
        {
            title:'Workday Scheduler',
            description: 'This app is a simple calendar that allows users to save events for each hour of the work day. The scheduler was created using JavaScript, HTML, and CSS and incorporated usage of the moment.js library.',
            screenShot: WorkDayScheduler,
            url: 'https://github.com/rickyonthephone/Work_Day_Scheduler',
            deployment:false,
            deploymentUrl:''
        },
        {
            title: 'Home Kitchen Pro Recipe App',
            description: 'This food and beverage app pulls recipes from the Spoonacular and thecocktaildb.com APIs. It allows users to search for recipes based on type or cuisine as well as get a cocktail recipe with each search. We created this app using JavaScript, HTML, and CSS along with using API calls to the two different API databases mentioned.',
            screenShot: HomeKitchenPro,
            url:'https://github.com/rickyonthephone/Project1Repo',
            deployment:false,
            deploymentUrl:''
        },
        {
            title:'Note Taker',
            description: 'This app was created to write and save personal notes. The app was created using JavaScript, HTML, CSS and also utilizes Express.js for routing on the back end. The app was deployed using Heroku.',
            screenShot: NoteTaker,
            url:'https://github.com/rickyonthephone/NoteTaker123',
            deployment: true,
            deploymentUrl:'https://rcnotetaker2021.herokuapp.com/'
        },
        {
            title:'Fitness Tracker',
            description:'This app tracks workouts and allows you to add data an exercise to an existing work. The workout data is also graphed out for the last 7 days. This app was deployed on Heroku and uses JavaScript, HTML, CSS, Express, and MongoDB for data storage.',
            screenShot: FitnessTracker,
            url: 'https://github.com/rickyonthephone/Fitness_Tracking_App',
            deployment: true, 
            deploymentUrl: 'https://trackmyfitnesstoday.herokuapp.com/?id=60d2b45fd1c378ad28718b31'
        },
        {
            title:'Database of UFO Sightings',
            description:'This app plots UFO sightings on a map of the US. Users can sign up or log in and enter their own sightings to add to the database by completing a short form. This app was completed utilizing MongoDB, GraphQL, React, JavaScript, HTML, and CSS. The app also uses NPM packages for Google Maps and Supercluster for the map plotting.',
            screenShot: Dufos,
            url: 'https://github.com/Limnation/project3',
            deployment: true, 
            deploymentUrl: 'https://doufos.herokuapp.com'
        }
    ],

    skills: [
        {
            image: HTML5Logo,
            description: 'HTML5'
        },
        {
            image: CSSLogo,
            description: 'CSS'
        },
        {
            image: JSLogo,
            description: 'JavaScript'
        },
        {
            image: NodeJSLogo,
            description: 'NodeJS'
        },
        {
            image: MongoDBLogo,
            description: 'MongoDB'
        },
        {
            image: MySQLLogo,
            description: 'MySQL'
        },
        {
            image: ExpressLogo,
            description: 'ExpressJS'
        },
        {
            image: ReactLogo,
            description: 'React'
        },
        {
            image: GraphQLLogo,
            description: 'GraphQL'
        }
    ],

    social: [
        {
            ghimage: GitHubLogo,
            url: 'https://github.com/rickyonthephone'
        },
        {
            liimage: LinkedInLogo,
            url: 'https://www.linkedin.com/in/richard-crippen-2b134a2/'
        },
        {
            cpimage: codepenLogo,
            url: 'https://codepen.io/rickyonthephone'
        }
    ]
}