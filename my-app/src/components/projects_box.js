import React from 'react';

function Projectsbox(projects){
    const item = projects.item;
    const imagePath = `${process.env.PUBLIC_URL}${item.main_image}`;
    const handleclick = event => {

    }

//    console.log(item.main_image);

    return (
        <div className="ProjectsPageProjectsTabComponent">
            <img src={imagePath} className="ProjectsPageProjectsBackgroundImage" alt="Image"></img>
            <div className= 'ProjectsPageProjectsGradientOverlay'></div>
            <div className="ProjectsPageProjectButtonTitleLayout">
                <b>{item.name}</b>
            </div>
            <div className='ProjectsPagProjectButtonSkillsLayout'>
                {item.skills}
            </div>
            <div className='ProjectsPageProjectButtonSummaryLayout'>
                {item.summary}
            </div>
        </div>
    )        
}

export default Projectsbox;