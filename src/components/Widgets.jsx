import React from 'react';
import "../views/Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets(){
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon></FiberManualRecordIcon>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    ) 
    return <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon></InfoIcon>
        </div>
        {newsArticle("Software Developer, Early Career"," Google - Mountain View CA ")}
        {newsArticle("FrontEnd Software Developer"," Apple - Palo Alto CA, USA")}
        {newsArticle("Web Application Developer"," McGill University - Montreal QC, CA ")}
        {newsArticle("Python Developer"," ScotiaBank - Ottawa ON,CA ")}
        {newsArticle("BackEnd Software Developer"," Bell - Montreal QC, CA ")}
        {newsArticle("UE4 Game Developer"," Qualcomm - San Diego CA, USA ")}
        {newsArticle("Developer Relations"," Oculus VR - Los Angeles CA, USA ")}
        {newsArticle("Software Developer Intern"," General Atomics Aeronautical Systems - San Diego CA, USA ")}
    </div>
}
export default Widgets