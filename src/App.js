import React from 'react';
import './App.css';
import {selectUser} from "./features/userSlice.js";
import Header from './components/Header.jsx';
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Login from "./components/Login.jsx";

function App() {
  const user = useSelector(selectUser);
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
