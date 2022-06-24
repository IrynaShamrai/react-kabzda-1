import React, {Component} from 'react';
import cls from './Post.module.css';

const Post = (props) => {
    return (
    <div>
        <div className={cls.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Z4u3N8cRHR1AHWDbzSoDPWLMp-4i97Wrmw&usqp=CAU'/>
            <div className={cls.messageContainer}>
                <p>{props.name}</p>
                <p>{props.message}</p>
            </div>
            
        </div>
        <span>likes: {props.count}</span>
    </div>
    )
}

export default Post;