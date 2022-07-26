import React from 'react';
import video from "../data/video.js"

function Button({value, emoji, onLikeClick}) {


    return (       
        <span>
    <button onClick={onLikeClick}>
{value} {emoji}
    </button>
        </span>
    )
}

export default Button
