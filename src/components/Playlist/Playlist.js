import React, { useState, useCallback } from "react";
import TrackList from '../TrackList/TrackList';

import "./Playlist.css";


const Playlist = (props) => {

    return (
        <div className="Playlist">
            <input className="PlaylistName" type="text" placeholder="Enter a playlist name" />
            <TrackList />
            <button className="SaveToSpotify">SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;