import React, { useEffect, useState } from 'react'
import './Home.css'
import Post from './Post'
import Story from './Story'
import PeopleToFollow from './PeopleToFollow'
import db from './firebase'

function Home() {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        
        db.collection('post').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))

    }, [])

    const [stories, setStories] = useState([])

    useEffect(() => {
        
        db.collection('stories').onSnapshot(snapshot => (
            setStories(snapshot.docs.map(doc => doc.data()))
        ))
        
    }, [])

    return (
        <div className="home">
            <div className="home__left">
                <div className="home__story">

                    {stories.map(stories => (
                        <Story
                        image={stories.image}
                        user={stories.user}
                    />
                    ))}
                    
                </div>

                <div className="home__left">

                    {posts.map(post => (
                        <Post 
                        avatar={post.avatar}
                        image={post.image}
                        user={post.user}
                        location={post.location}
                        description={post.description}
                        />
                    ))}

                </div>

            </div>
            <div className="home__right">
                <PeopleToFollow />
            </div>
        </div>
    )
}

export default Home
