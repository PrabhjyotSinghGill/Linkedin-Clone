import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";

function App() {
  return (
    <div className="app">
     <Header></Header>
     {/*App Body*/}
      <div className="app__body">
        {/*Sidebar*/}
        <Sidebar></Sidebar>
        {/*Feed*/}
        <Feed></Feed>
        {/*Widgets*/}
      </div>
    </div>
  );
}

export default App;
