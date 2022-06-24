import React, {Component} from 'react';
import cls from './Messages.module.css';
import { Link, NavLink } from 'react-router-dom';

const Messages =(props)=> {
    
    return(
        <div className={cls.messange}>{props.message}</div>
    )
}

export default Messages;