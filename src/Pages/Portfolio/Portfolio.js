import React from 'react'
import '../../App.css'
import Card from '../../components/Card/Card'
import data from '../../allData'
import './Portfolio.css'

function Portfolio () {
    return (
        <div className='pageContent' id='portfolio'>
            <div className='container'>
                <div className='myTitle'>
                    <h1>My Portfolio</h1>
                </div>
                <div className='portfolioWrap'>
                    <div className='grid cards'>
                        {data.projects.map((project, index) => (
                            <Card 
                                key={index}
                                title={<div class='title'>{project.title}</div>}
                                description={<div class='description'>{project.description}</div>}
                                screenShot={project.screenShot}
                                url={<div class='code'>{project.url}</div>}
                                deployment={project.deployment}
                                deploymentUrl={<div class='deploy'>{project.deploymentUrl}</div>}
                            ></Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
