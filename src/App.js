import React,{useEffect} from 'react';
import './App.css';
import {auth} from "./firebase.js";
import Header from './components/Header.jsx';
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Login from "./components/Login.jsx";
import { useSelector, useDispatch } from 'react-redux';
import {login, logout, selectUser} from "./features/userSlice.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //user is logged in
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      } else{
        //user is logged out
        dispatch(logout());
      }
    })
  },[]);

  return (
    <div className="app">
     <Header></Header>
     {/*Login Page */}
     {!user ? (
     <Login></Login>
     ):(
      <div className="app__body">
        {/*Sidebar*/}
        <Sidebar></Sidebar>
        {/*Feed*/}
        <Feed></Feed>
        {/*Widgets*/}
      </div>
     )}
     
    </div>
  );
}

export default App;
