import React from 'react'
import './PeopleAvatar.css'

function PeopleAvatar({avatar,user,description,work}) {

    function truncate(str,n) {
        return str?.length >n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        
        <div className="avatar">
            <div className="avatar__userData">
                <img 
                src={avatar}
                alt="" 
                />

                <div className="userDetails">
                    <h4>{user}</h4>
                    <h4 className="avatar__displayName">
                        {truncate(description,15)}
                    </h4>
                </div>
            </div>

            <h4>{work}</h4>
        </div>
    )
}

export default PeopleAvatar
