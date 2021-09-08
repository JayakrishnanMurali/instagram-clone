import React from 'react'
import './Story.css'

function Story({image, user}) {

    function truncate(str,n) {
        return str?.length >n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <div className="story">
            <div className="story__container">
                <img 
                src={image} 
                alt="Story avatar" 
                className="story__img" 
                />

                <p className="story__author">{truncate(user,11)}</p>

            </div>
        </div>
    )
}

export default Story
