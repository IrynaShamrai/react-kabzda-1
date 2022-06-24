import React, {Component} from 'react';
import cls from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = (props) => {

  return (
    <Router>
        <div className={cls.appWrapper}>
          <Header/>
          <Navbar/>
          <div className={cls.appWrapperContent}>
          <Routes>
            <Route path='/profile' element={<Profile posts={props.posts}/>}/>
            <Route path='/messenges' element={<Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
          </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;


