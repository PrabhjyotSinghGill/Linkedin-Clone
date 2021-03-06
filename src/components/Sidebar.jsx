import React from 'react';
import "../views/Sidebar.css";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice.js";
import {Avatar} from "@mui/material";

function Sidebar(){
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    )

    return(<div className="sidebar">
        <div className="sidebar__top">
            <img src="nat.jpg" alt=""></img>
            <Avatar src={user.photoUrl} className="sidebar__avatar"></Avatar> 
            <h2>{user.displayName}</h2>  
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('ArtificialIntelligence')}
            {recentItem('ComputationalComplexity')}
            {recentItem('MachineLearning')}
            {recentItem('ComputerVisionandPatternRecognition')}
            {recentItem('CryptographyAndSecurity')}
            {recentItem('DigitalLibraries ')}
            {recentItem('Distributed,Parallel,ClusterComputing ')}
            {recentItem('Automata Theory')}
            {recentItem('HumanComputerInteraction')}
            {recentItem('NeuralAndEvolutionaryComputing')}
            {recentItem('NetworkingAndInternetArchitecture')}
            {recentItem('Robotics')}
            {recentItem('Operating Systems')}
            {recentItem('Symbolic Computation')}
        </div>
    </div>);
}
export default Sidebar