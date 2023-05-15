import React, { useState, useCallback } from "react";

import "./SearchBar.css";


const SearchBar = (props) => {
    
    return (
        <div className="SearchBar">
            <input className="SearchInput" placeholder="Enter a song title" />
            <button className="SearchButton">SEARCH</button>
        </div> 
    );
};

export default SearchBar;