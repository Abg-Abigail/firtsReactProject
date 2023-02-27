import React from "react";
import dojaCatImg from "../assets/images/doja cat.jpg"


const SongItem  = () => {
  
    return (
        <div className="song-item">
            <a href="song.html">
                <img src = {dojaCatImg} alt = "Doja Cat - Say So" />
                <div className="song-info">
                    <h3>Say So</h3>
                    <h4>Doja Cat</h4>
                </div>
            </a>
        </div>
    )
    
}

export default SongItem