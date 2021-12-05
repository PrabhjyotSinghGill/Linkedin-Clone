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
        {newsArticle("PAPA React","Top News - 9099 readers")}
        {newsArticle("PAPA React","Top News - 9099 readers")}
        {newsArticle("PAPA React","Top News - 9099 readers")}
        {newsArticle("PAPA React","Top News - 9099 readers")}
        {newsArticle("PAPA React","Top News - 9099 readers")}
        {newsArticle("PAPA React","Top News - 9099 readers")}
        {newsArticle("PAPA React","Top News - 9099 readers")}
        {newsArticle("PAPA React","Top News - 9099 readers")}
        {newsArticle("PAPA React","Top News - 9099 readers")}
    </div>
}
export default Widgets