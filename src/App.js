import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="app">
     <Header></Header>
     {/*App Body*/}
      <div className="app__body">
        {/*Sidebar*/}
        <Sidebar></Sidebar>
        {/*Feed*/}
        {/*Widgets*/}
      </div>
    </div>
  );
}

export default App;
