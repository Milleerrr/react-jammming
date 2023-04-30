import React, { useState, useCallback } from "react";
import Track from '../Track/Track';

import "./TrackList.css";

const tracks = [
    { id: 'ID1',trackTitle: 'Song', artistName: 'Artist', albumTitle: 'Album'},
    { id: 'ID2', trackTitle: 'Song2', artistName: 'Artist2', albumTitle: 'Album2'},
    { id: 'ID3', trackTitle: 'Song3', artistName: 'Artist3', albumTitle: 'Album3'},
]

const TrackList = (props) => {

    const trackItems = [];
    for (let i = 0; i <= tracks.length - 1; i++) {
        const track = tracks[i];
        trackItems.push(
            <div className="TrackListItem">
            <Track
                key={track.id}
                trackTitle={track.trackTitle}
                artistName={track.artistName}
                albumTitle={track.albumTitle}
            />
            <hr/>
            </div>
        )
    }

    return (
        <div className="TrackListContainer">
            <div className="TrackListItems">
                {trackItems}
            </div>
        </div>
    );
};

export default TrackList;