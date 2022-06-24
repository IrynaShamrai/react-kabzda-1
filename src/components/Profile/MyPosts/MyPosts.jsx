import React, {Component} from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map (post => <Post name={post.name} count={post.likes} message={post.message}/>)

    return (
    <div>
        <textarea></textarea>
        <button>add post</button>
        {postElements}
    </div>
    )
}

export default MyPosts;