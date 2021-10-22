import React from 'react'

function Post(props) {
    return (
        <div className="post">
            <div className="postText">
                {props.text}
            </div>
            <div className="postUser">
                {props.user}
            </div>
            <div className="postKey">
                {props.key}
            </div>
            <div className="postDate">
                {props.date}
            </div>
            
        </div>
    )
}

export default Post
