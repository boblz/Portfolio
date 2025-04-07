import React from 'react';


function projectsOverlay(projects){
    const item = projects.item;
    const imagePath1 = `${process.env.PUBLIC_URL}${item.main_image}`;
    const imagePath2 = `${process.env.PUBLIC_URL}${item.user_goals_image}`;
    const imagePath3 = `${process.env.PUBLIC_URL}${item.design_goals_image}`;
    const imagePath4 = `${process.env.PUBLIC_URL}${item.prototyping_image}`;

    const figmaButton = item.figma;
    const githubButton = item.github;
    const websiteButton = item.website;

    console.log(githubButton);
    console.log(websiteButton);

    return(
        <div className="ProjectPopupLayoutChild">
            <div className="ProjectPopupExitTitleLayout">
                Click to close
            </div>
            <div className="ProjectPopupTitle">
                {item.name}
            </div>
            <div className="ProjectPopupMainImageLayout">
                <img src={imagePath1} className="ProjectPopupMainImage" alt="Image"></img>
            </div>

            <div className="ProjectPopupSummaryLayout">
                <div className= "ProjectPopupSummaryChildLayout">
                    <div className="ProjectPopupSummaryDescriptionLayout">
                        <div className="ProjectPopupSummaryTitleLayout">
                            <div className = "ProjectPopupSummaryTitle">
                                <b>User Goals.</b>
                            </div>
                            <div className = "ProjectPopupSummarySubtitle">
                                {item.user_goals_subtitle}
                            </div>
                        </div>
                        <div className="ProjectPopupSummaryDescription" dangerouslySetInnerHTML={{ __html: item.user_goals_summary }}/>
                    </div>
                    <div className="ProjectPopupSummaryImageLayout">
                        <img src = {imagePath2} className="ProjectPopupSummaryImage"></img>
                    </div>
                </div>
                <div className= "ProjectPopupSummaryChildLayout">
                    <div className="ProjectPopupSummaryImageLayout">
                        <img src = {imagePath3} className="ProjectPopupSummaryImage"></img>
                    </div>    
                    <div className="ProjectPopupSummaryDescriptionLayout">
                        <div className="ProjectPopupSummaryTitleLayout">
                            <div className = "ProjectPopupSummaryTitle">
                                <b>Design Goals.</b>
                            </div>
                            <div className = "ProjectPopupSummarySubtitle">
                                {item.design_goals_subtitle}
                            </div>
                        </div>
                        <div className="ProjectPopupSummaryDescription" dangerouslySetInnerHTML={{ __html: item.design_goals_summary }}/>
                        <div className="ProjectPopupButtonLayout">
                            {figmaButton && (
                                <a className="button Button1" href={figmaButton} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Figma</a>
                            )}
                        </div>
                    </div>
                </div>

                <div className= "ProjectPopupSummaryChildLayout">
                    <div className="ProjectPopupSummaryDescriptionLayout">
                        <div className="ProjectPopupSummaryTitleLayout">
                            <div className = "ProjectPopupSummaryTitle">
                                <b>Prototyping.</b>
                            </div>
                            <div className = "ProjectPopupSummarySubtitle">
                                {item.prototyping_subtitle}
                            </div>
                        </div>
                        <div className="ProjectPopupSummaryDescription" dangerouslySetInnerHTML={{ __html: item.prototyping_summary }}/>
                        <div className="ProjectPopupButtonLayout">
                            {githubButton && (
                                <a className="button Button1" href={githubButton} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Github</a>
                            )}
                            {websiteButton && (
                                <a className="button Button1" href={websiteButton} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Website</a>
                            )}
                        </div>
                    </div>
                    <div className="ProjectPopupSummaryImageLayout">
                        <img src = {imagePath4} className="ProjectPopupSummaryImage"></img>
                    </div>                    
                </div>

            </div>
        </div>
    )
}

export default projectsOverlay;