import React, {Component} from 'react';
import cls from './Dialogs.module.css';
import { Link, NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import {sendMassageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reduser';

const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogsData.map ((dialog,i) => <DialogItem key={i} name={dialog.name} id={dialog.id}/>);
    let messages = props.state.messagesData.map ((message,i) =>  <Messages key={i} message={message.message} id={message.id} />);
    let inputMessage = props.state.newMessageText;
    let newPostElement = React.createRef();

    let onSendMessageClick = ()=>{
        props.dispatch(sendMassageCreator());
        newPostElement.current.value = '';
    }

    let onNewMessageChange = (e)=>{
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
        console.log(body);
    }


    return (
    <div className={cls.dialogs}>
        <div className={cls.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={cls.messanges}>
            <div>{messages}</div>
            <div>
                <textarea  onChange={onNewMessageChange} value={inputMessage} placeholder='Enter you message' ref={newPostElement}></textarea>
                <button  type='button' onClick={onSendMessageClick}>Add post</button>
            </div>     
        </div> 
    </div>
    )
}

export default Dialogs;