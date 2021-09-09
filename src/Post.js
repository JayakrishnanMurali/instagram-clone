import React from 'react'
import './Post.css'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { VscBookmark, VscSmiley } from 'react-icons/vsc'



function Post({avatar,user,location,image,description}) {

    function truncate(str,n) {
        return str?.length >n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <div className="post" >
            
            <div className="post__header">

                <div className="post__header-userDetails">
                    <img
                    className="post__header-avatar" 
                    src={avatar} 
                    alt="" 
                    />

                    <div className="post__header-userNameLocation">
                        <h4>{user}</h4>
                        <p>{location}</p>
                    </div>
                    
                </div>

                <BiDotsHorizontalRounded 
                className ="post__header-settings"
                />

            </div>

            <div className="post__content">
                
                <img 
                className="post__content-image"
                src={image} 
                alt="" 
                />
                

            </div>

            <div className="post__social">

                <div className="post__social-container">

                    <div className="post__social-top">
                        <div className="post__social-likeShare">
                            <AiOutlineHeart className="post__social-Button"/>
                            <BiMessageSquareDetail className="post__social-Button"/>
                            <IoPaperPlaneOutline className="post__social-Button"/>
                        </div>         
                        <VscBookmark className="post__social-Button"/>
                        
                    </div>

                    <div className="post__social-down">

                        <h3 className="post__social-likes">1002 likes</h3>
                        
                        <div className="post__social-userDetails">
                            <h4>{user}</h4>
                            <h4>{truncate(description,22) }</h4>
                        </div>

                        <h4 className="post__social-comments">View all 12 comments</h4>

                        <h6 className="post__social-time">1HOUR AGO</h6>

                        <div className="post__social-addComment">
                            
                            <div className="post__social-inputComment">
                                <VscSmiley className="post__social-smileyButton"/>

                                <input type="text" placeholder="Add a comment..." />
                            </div>

                            <h5>Post</h5>

                        </div>

                    </div>     
                
                </div>   

            </div>

        </div>
    )
}

export default Post
