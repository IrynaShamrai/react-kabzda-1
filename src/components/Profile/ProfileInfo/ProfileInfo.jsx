import React, {Component} from 'react';
import cls from './ProfileInfo.module.css';

const ProfileInfo =(props)=> {
    return (
        <div>
        <div className={cls.container_img}>
            <img src='https://www.handydryers.co.uk/images/blog/KangarilloHeader.jpg'/>
        </div>
        <div>
          ava + description
        </div>
        </div>
    )
}

export default ProfileInfo;