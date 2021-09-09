import React from 'react'
import PeopleAvatar from './PeopleAvatar'
import PeopleOption from './PeopleOption'
import './PeopleToFollow.css'

function PeopleToFollow() {
    return (
        <div className="follow">

            <PeopleOption 
                avatar="https://api.time.com/wp-content/uploads/2016/10/zayn-malik-one-direction-anxiety-book.jpg?w=824&quality=70"
                user="zayn"
                displayName="Zayn Malik"
                work="Switch"
            />

            <div className="follow__suggestionsSeeAll">
                <h4 className="follow__suggestions">Suggestions For You</h4>
                <h4 className="follow__seeAll">See All</h4>
            </div>

            <PeopleAvatar
                avatar="https://api.time.com/wp-content/uploads/2016/10/zayn-malik-one-direction-anxiety-book.jpg?w=824&quality=70"
                user="zayn"
                description="New to Instagram"
                work="Follow"
            />

            <PeopleAvatar 
                avatar="https://api.time.com/wp-content/uploads/2016/10/zayn-malik-one-direction-anxiety-book.jpg?w=824&quality=70"
                user="zayn"
                description="Followed by Virat"
                work="Follow"
            />

            <PeopleAvatar 
                avatar="https://api.time.com/wp-content/uploads/2016/10/zayn-malik-one-direction-anxiety-book.jpg?w=824&quality=70"
                user="zayn"
                description="Followed by Neymar"
                work="Follow"
            />

            <PeopleAvatar 
                avatar="https://api.time.com/wp-content/uploads/2016/10/zayn-malik-one-direction-anxiety-book.jpg?w=824&quality=70"
                user="zayn"
                description="Follows you"
                work="Follow"
            />

            <PeopleAvatar 
                avatar="https://api.time.com/wp-content/uploads/2016/10/zayn-malik-one-direction-anxiety-book.jpg?w=824&quality=70"
                user="zayn"
                description="Followed by Selena"
                work="Follow"
            />

            <p>About. Help. Press. API. Jobs. Privacy. Terms. Locations.
                Top Accounts. Hashtags. Language
            </p>

            <h4 className="follow__copyRights">
                {'\u00a9 '}
                2021 INSTAGRAM FROM FACEBOOK 
            </h4>
        </div>
    )
}

export default PeopleToFollow
