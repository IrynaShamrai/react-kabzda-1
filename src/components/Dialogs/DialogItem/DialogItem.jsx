import React, {Component} from 'react';
import cls from './DialogItem.module.css';
import { Link, NavLink } from 'react-router-dom';

const DialogItem =(props)=> {
    
    return(
    <div className={cls.dialog}>
        <div>
            <NavLink className = {navData => navData.isActive ? cls.active : cls.dialogs} to={'/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
    )
}

export default DialogItem;