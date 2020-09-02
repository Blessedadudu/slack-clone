import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
