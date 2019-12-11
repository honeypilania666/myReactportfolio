
import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {

        const {description, image,title,link} = props.project;
        
        return(
            <div style={{display: 'inline-block', width:400,margin:10}}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width:200, height:120}} />
            <p>{description}</p>
            <a href={link}>{link} </a>
            </div>
        )
    
}



 const Projects = () => (
            <div>
                <h2>Highlighted Projects!</h2>
                 <div>
                {
                    PROJECTS.map(PROJECTS=>(
                        <Project key={PROJECTS.id} project={PROJECTS} />
                    ))
                }
                </div>
            </div>
        );
    


export default Projects;
 