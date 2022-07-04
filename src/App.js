import React, {Component} from 'react';
import cls from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
        <div className={cls.appWrapper}>
          <Header/>
          <Navbar/>
          <div className={cls.appWrapperContent}>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path='/messenges' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
          </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;


