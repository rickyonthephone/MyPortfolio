import React from "react"
import "./Card.css"

const Card = ({ title, description, screenShot, url, deployment, deploymentUrl}) => {

    return (
        <div className='infoCard' style={{marginTop:50, border: '2px solid black',marginLeft: 10, marginRight: 20, marginBottom:10, maxWidth: 600, minWidth: 350, backgroundColor:'whitesmoke'}}>
            <div className = 'cardContent'>
                <h3 className = 'cardTitle'>{title}</h3>
                <p className = 'cardDescription'>{description}</p>
                <img src={screenShot} className='screenShotImage' alt='screenShot'></img>
                <br></br>
                <a href={url}>Check Out the Code!</a> 
                <br></br>
                {deployment ? <a href={deploymentUrl}>Check Out the Deployment!</a> : <></>} 
                <br></br>          
            </div>
        </div>
    )
}



export default Card