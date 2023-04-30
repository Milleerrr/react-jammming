import React, { useState, useCallback } from "react";
import TrackList from '../TrackList/TrackList';

import "./SearchResults.css";


const SearchResults = (props) => {
    
    return (
        <div className="SearchBarResults">
            <h2>Results</h2>
            <TrackList />
        </div> 
    );
};

export default SearchResults;