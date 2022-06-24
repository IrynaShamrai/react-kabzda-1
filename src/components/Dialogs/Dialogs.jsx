import React, {Component} from 'react';
import cls from './Dialogs.module.css';
import { Link, NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map (dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.messages.map (message =>  <Messages message={message.message} id={message.id} />);

    return (
    <div className={cls.dialogs}>
        <div className={cls.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={cls.messanges}>
            {messages}
        </div> 
    </div>
    )
}

export default Dialogs;