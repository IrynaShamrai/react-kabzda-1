import React, {Component} from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, addNewPostActionCreator} from '../../../redux/profile-reduser';

const MyPosts = (props) => {

    let postElements = props.posts.map ((post,i) => <Post key={i} name={post.name} count={post.likes} message={post.message}/>);

    let newPostElement = React.createRef();

    let addPost = ()=>{
        props.dispatch(addPostActionCreator());
        // props.dispatch(addNewPostActionCreator);
        newPostElement.current.value = ' ';
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(addNewPostActionCreator(text));
    }

    return (
    <div>
        <p className={cls.newPost}>New post</p>
        <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
        <button  type='button' onClick={addPost}>Add post</button>
        {postElements}
    </div>
    )
}

export default MyPosts;