
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header"; 
import Skills from "./components/skills/Skills";
import Project from './components/project/Project';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Fab from "./components/fab/Fab";
import { Container } from '@mui/material'


function App() {

  
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Fab />
    </>
  );
}

export default App;
