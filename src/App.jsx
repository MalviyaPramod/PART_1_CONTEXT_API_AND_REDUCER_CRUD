import React from 'react';
import './App.css'
import { Route, Routes, Link } from "react-router-dom"
import NavbarComponent from './components/NavbarComponent';
import ReducerOne from './components/Reducers/ReducerOne/ReducerOne';
import ReducerTwo from './components/Reducers/ReducerTwo/ReducerTwo';

import { SignUp, SignIn} from './components';
/*
* Import ContextAPI Components 
*/
import ContextApiLearning from './components/ContextApilearning/ContextApiLearning';
import GlobalProvider from './components/ContextApiCrud/GlobalProvider';
import GlobalState from './components/contextApiFinal/GlobalState';
const App = () => {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={ <ReducerOne/> } />
        <Route path="/reducer-two" element={ <ReducerTwo/> } />
        <Route path="/sign-up" element={ <SignUp/> } />
        <Route path="/sign-in" element={ <SignIn/> } />
        <Route path="/contentapi-learning" element={ <ContextApiLearning/> } />
        <Route path="/employee-list" element={ <GlobalProvider/> } />
        <Route path="/employee-items" element={ <GlobalState/> } />
      </Routes>
    </>
  )
}

export default App
