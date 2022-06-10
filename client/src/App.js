
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header"; 
import Skills from "./components/skills/Skills";
import Project from './components/project/Project';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Skills />
    <Project />
    <About />
    <Contact />
    </>
  );
}

export default App;
