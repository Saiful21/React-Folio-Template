import React from 'react';
import Header from './components/header';
import HeaderContent from './components/Header-content';
import AboutMe from './components/About-me';
import Skill from './components/Skills';
import Service from './components/Services';
import Project from './components/Projects';
import Testi from './components/Testimonial';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderContent/>
      <AboutMe/>
      <Skill/>
      <Service/>
      <Project/>
      <Testi/>
      <Clients/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
