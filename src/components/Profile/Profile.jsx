import React, {Component} from 'react';
import cls from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => { 
  return (
    <div>
        <ProfileInfo/>
        <div className={cls.wrapperPosts}>
          <MyPosts posts={props.state.postData} dispatch={props.dispatch}/>
        </div>
    </div>
    )
    
}

export default Profile;