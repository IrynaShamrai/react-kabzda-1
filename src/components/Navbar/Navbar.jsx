import React, {Component} from 'react';
import cls from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
     <nav className={cls.items}>
        <ul>
          <li>
            <NavLink className = {navData => navData.isActive ? cls.active : cls.items} to='/profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink  className = {navData => navData.isActive ? cls.active : cls.items} to='/messenges'>Messenges</NavLink>
          </li>
          <li>
            <NavLink className = {navData => navData.isActive ? cls.active : cls.items} to='/news'>News</NavLink>
          </li>
          <li>
            <NavLink className = {navData => navData.isActive ? cls.active : cls.items} to='/music'>Music</NavLink>
          </li>
          <li>
            <NavLink className = {navData => navData.isActive ? cls.active : cls.items} to='/settings'>Settings</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar;