import React from "react";
import "./Post.css";
import Avatar from "@mui/material";

function Post ({username, caption, imageURL}){
    return(
    <div className="post">
        <div className="post-header">
        {/* {HEADER} */}
        <Avatar className="post-avatar" alt={username} src="/static/images/avatar/1.jpg"/>
        <h3>{username}</h3>
        </div>
        {/* {USERNAME} */}
        <img className="post-image" src={imageURL} alt=""/>
        {/* {USERNAME + CAPTION} */}
        <h4 className="post-text">
            <strong>{username}</strong>{caption}
        </h4>
    </div>      




    );
}