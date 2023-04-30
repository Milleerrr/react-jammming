import React, { useState, useCallback } from "react";

import "./Track.css";


const Track = (props) => {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div className="TrackContainer">
            <div className="TrackItem">
                <p className="TrackItemTitle">{props.trackTitle}</p>
                <span className="TrackItemSubtitle">{props.artistName} - {props.albumTitle}</span>
            </div>
            <button className="TrackAddButton">+</button>
        </div> 
    );
};

export default Track;