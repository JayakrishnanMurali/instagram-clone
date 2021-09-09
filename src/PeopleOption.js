import React from 'react'
import './PeopleOption.css'

function PeopleOption({avatar,user,displayName,work}) {
    return (
        <div className="people">
            
            <div className="people__userData">
                <img 
                src={avatar}
                alt="" 
                />

                <div className="userDetails">
                    <h4>{user}</h4>
                    <h4 className="people__displayName">
                        {displayName}
                    </h4>
                </div>
            </div>

            <h4>{work}</h4>

        </div>
    )
}

export default PeopleOption
