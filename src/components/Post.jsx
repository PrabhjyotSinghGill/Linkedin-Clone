import React from 'react';
import "../views/Post.css";
import InputOption from './InputOption.jsx';
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';

function Post({name,description,message,photoUrl}){
return(<div className="post">
    <div className="post__header">
        <Avatar src={photoUrl}></Avatar>
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </div>
    <div className="post__body">
        <p>{message}</p>
    </div>
    <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"></InputOption>
        <InputOption Icon={ChatIcon} title="Comment" color="gray"></InputOption>
        <InputOption Icon={ShareIcon} title="Share" color="gray"></InputOption>
        <InputOption Icon={SendIcon} title="Send" color="gray"></InputOption>
    </div>
</div>);
}

export default Post