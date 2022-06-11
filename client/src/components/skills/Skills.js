import React from 'react';
import { useState } from 'react';
import "./skills.scss"; 
import sandwich from '../../assets/images/sandwich.png'
import frontEnd from '../../assets/images/front-end-monitor.jpg';
import backEnd from '../../assets/images/backend-icon.png';
import { frontEndArray, tools, backend } from "../../utils/tools.js";
import { faBluetooth } from '@fortawesome/free-solid-svg-icons';
import graphQl from '../../assets/icons/graphql.svg';

import { faJs, faReact, faHtml5, faCss3, faBootstrap, faAngular, faJava, faNodeJs, faPython, faServer  } from "@fortawesome/free-brands-svg-icons"
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const Skills = () => {

    const [changeList, setChangeList ] = useState(false);

    const handleClick = () => {
      if (changeList) {
        setChangeList(false);
      } else {
        setChangeList(true);
      }
       
    }


  return (
    <div className="skills" id="skills">
    <div className="container">
    <div className='skills-title'>
      <h2>SKILLS</h2>
    </div>
    <div className="row skills-circle">

    {!changeList ? 
      <div>
      <h6>Click the picture to change to <span>backend</span> skills.</h6>
      </div>
      :
      <div>
      <h6>Click the picture to change to <span>frontend</span> skills.</h6>
      </div>
    }
    
    <div className="row">

 

    {!changeList ? 
      
      <>
     
      <div className="iconPic" onClick={handleClick}>
          <img src={frontEnd} />
        </div>
        <div className="skills-section col"> 
        <div className="icon-div deg0 ">
        <FontAwesomeIcon className="icon" icon={faJs} />
        <span className="caption">Javascript</span>
        </div>
        <div className="icon-div deg45">
        <FontAwesomeIcon className="icon" icon={faReact} />
        <span className="caption">React</span>
        </div>
        <div className="icon-div deg135">
        <FontAwesomeIcon className="icon" icon={faHtml5} />
        <span className="caption row">HTML</span>
        </div>
        <div className="icon-div deg180">
        <FontAwesomeIcon className="icon" icon={faCss3} />
        <span className="caption row">CSS</span>
        </div>
        <div className="icon-div deg225">
        <FontAwesomeIcon className="icon" icon={faBootstrap} />
        <span className="caption row">Bootstrap</span>
        </div>
        <div className="icon-div deg315">
        <FontAwesomeIcon className="icon" icon={faAngular} />
        <span className="caption row">Angular</span>
        </div>
        </div>
        
        </>
       
        : 
        <>
          
        <div className="iconPic" onClick={handleClick}>
          <img src={backEnd} />
        </div>
        <div className="skills-section col"> 
        <div className="icon-div deg0 ">
        <FontAwesomeIcon className="icon" icon={faPython} />
        <span className="caption">Python</span>
        </div>
        <div className="icon-div deg45">
        <FontAwesomeIcon className="icon" icon={faJava} />
        <span className="caption">Java</span>
        </div>
        <div className="icon-div deg135">
        <FontAwesomeIcon className="icon" icon={faNodeJs} />
        <span className="caption row">NodeJs</span>
        </div>
        <div className="icon-div deg180">
        <svg viewBox="0 0 128 128" width="60" height="60">
    <path fill="#cbd0e4" d="M75.39 15.31c-.2.06-1.25.41-2.36.77-5.94 1.94-10.15 4.19-11.19 5.98-.4.68-.47 1.24-.24 1.79.26.62.74 1.1 2.06 2.03.62.44 1.67 1.34 2.36 2.02 3.27 3.26 4.85 7.26 4.67 11.78-.2 5.09-2.59 10.18-7.15 15.26-1.59 1.78-3.23 3.26-6.36 5.77-2.61 2.09-4.03 3.45-5 4.76-2.97 4.04-2.17 7.64 2.35 10.65 3.99 2.66 11.02 4.87 19.32 6.07 2.78.4 5.92.66 6.68.55l.53-.08.83-1.5c4.21-7.57 6.33-14.72 6.59-22.11.11-3.3-.3-7.2-1.01-9.48-.13-.41-.22-.76-.21-.77.01-.01 1.19-.37 2.61-.79 7.49-2.23 14.74-3.99 20.73-5.03 1.17-.2 2.16-.41 2.21-.46.32-.31-.61-1.77-2.13-3.33-5.6-5.78-15.5-10.18-27.12-12.06-2.24-.36-2.51-.49-3.34-1.59-1.32-1.75-2.56-4.73-4.25-10.2-.05-.18-.1-.18-.58-.03zm.77 2.06c.65 1.78 1.05 3.17 1.05 3.66v.39l-.55-.06c-2.99-.35-7.77-1.09-8.79-1.36-.26-.07-.41-.17-.36-.25.08-.12 1.09-.61 4.11-1.98 2.81-1.28 3.88-1.75 3.97-1.76.04-.01.29.61.57 1.36zm-6.33 3.75c3.65.77 6.32 1.25 6.9 1.25.57 0 .51.05-2.18 1.69-2.07 1.26-2.31 1.38-2.83 1.38h-.57l-1.54-1.55c-1.86-1.88-3.12-3.26-3.12-3.42 0-.06.04-.08.09-.05.05.01 1.52.33 3.25.7zm-2.7 1.73c.9 1.05 1.59 1.93 1.55 1.96-.08.07-2.64-.56-4.2-1.04-1.37-.42-1.53-.56-1.17-1.03.24-.31 2-1.78 2.13-1.79.04 0 .79.85 1.69 1.9zm11.66 2.16c.36.85.63 1.54.62 1.55-.02.01-4.82-.73-5.24-.81-.09-.02.72-.57 1.82-1.24s2.02-1.17 2.07-1.12c.05.05.37.77.73 1.62zm-10.47 1.62c.09.09 1.24 3.78 1.19 3.83-.02.02-.56-.61-1.21-1.41-.65-.8-1.63-1.93-2.2-2.51l-1.02-1.07 1.58.55c.88.29 1.62.57 1.66.61zm4.59.49c1.99.28 3.64.54 3.67.57.03.03-1.18.97-2.67 2.08-1.5 1.11-2.73 2.01-2.75 1.99-.02-.02-.17-.48-.34-1.04-.17-.55-.59-1.7-.94-2.56-.35-.86-.63-1.56-.61-1.56.01 0 1.65.24 3.64.52zm5 1.59c.44 1.03.61 2.01.68 3.98.04 1.06.04 1.92.01 1.92-.04 0-.67-.22-1.4-.48-1.46-.53-4.32-1.47-4.66-1.54-.15-.03.54-.69 2.36-2.25 1.41-1.22 2.61-2.21 2.67-2.21.05 0 .2.26.34.58zm5.13.25c2.2.45 4.13.85 4.28.89.22.05-.31.38-2.64 1.66-1.6.88-3.42 1.88-4.04 2.23-.62.35-1.14.62-1.15.61-.01-.01.05-.34.14-.73.33-1.43.12-3.21-.54-4.63-.19-.41-.35-.78-.35-.8.01-.11.41-.03 4.3.77zm6.01 2.69c-.11.5-.36 1.35-.55 1.9-.42 1.21-1.96 4.36-2.17 4.44-.08.03-.81-.3-1.6-.74s-1.94-1.02-2.54-1.29l-1.1-.49 4.03-2.59c3.34-2.14 4.04-2.55 4.08-2.36.03.13-.04.63-.15 1.13zm2.95-.92c4.18 1.2 8.6 2.82 8.34 3.06-.05.05-.6.23-1.21.4-3.16.89-7.55 2.41-9.6 3.32-.64.28-1.19.49-1.22.45-.03-.03.22-.95.56-2.05.66-2.16 1.43-5.07 1.43-5.44 0-.16.06-.22.21-.18.1.04.77.24 1.49.44zm-17.99 4.34c.95.31 2.07.74 2.48.95.74.37.75.38.54.61-.38.42-4.53 4.29-4.65 4.33-.06.02-.11-.56-.11-1.41 0-1.47-.17-4.13-.3-4.72-.1-.45-.02-.44 2.04.24zm26.56.77c-.91 1.51-2.42 3.66-3.5 5.02-1.11 1.39-3.46 4-3.6 4-.05 0-.39-.42-.76-.94-1.34-1.91-2.89-3.56-4.25-4.52-.13-.09-.21-.19-.18-.22s2.26-.85 4.95-1.83c5.44-1.97 7.84-2.77 7.99-2.67.02.01-.27.53-.65 1.16zm3.4-.26c3.76 2.62 6.31 4.74 7.23 6.01.23.32.4.59.38.61-.02.02-1.23.15-2.69.3-5.83.57-9.98 1.16-12.18 1.72-.59.15-1.08.26-1.09.25-.01-.01.38-.49.87-1.08 2.54-3.05 4.84-6.22 5.69-7.87.23-.44.45-.79.49-.79.05 0 .63.38 1.3.85zm-21.04 3.25c.72.39 1.27.74 1.24.8-.06.11-6.39 3.58-6.45 3.53-.01-.01.31-1.05.73-2.32.42-1.27.82-2.65.9-3.07l.14-.77 1.07.57c.59.31 1.65.87 2.37 1.26zm-5.31.2c-.61 2.12-1.85 4.86-2.42 5.33-.13.11-.39-.04-1.22-.72-.59-.47-1.19-.94-1.35-1.05-.15-.11-.27-.22-.24-.25.44-.43 5.48-4.5 5.51-4.44.01.04-.11.55-.28 1.13zm11.48 3.69c.95.64 3.07 2.53 2.96 2.65-.03.03-2.18.73-4.77 1.55-2.59.82-5.48 1.75-6.42 2.06-.94.32-1.72.56-1.73.55-.01-.01.65-.76 1.46-1.67 2.12-2.37 4.3-4.9 5.08-5.9l.67-.86.87.47c.47.26 1.32.78 1.88 1.15zm-4.91-1.36c-.06.08-.63.8-1.27 1.61s-2.18 2.78-3.42 4.38l-2.26 2.91-.07-.49c-.14-.95-.65-2.82-.94-3.45l-.29-.64 1.44-.72c1.48-.74 4.58-2.42 6.03-3.27.89-.52.95-.55.78-.33zm-12 3.52c.59.3 1.14.7 1.14.82 0 .19-3.83 3.15-3.94 3.04-.02-.03.32-.71.77-1.52s.9-1.72 1.01-2.03c.11-.31.27-.56.36-.56.09-.01.38.11.66.25zm3.26 3.64c.26.52.54 1.97.4 2.1-.06.05-1.64.8-3.52 1.67-1.88.86-4.33 2.02-5.45 2.58s-1.97.95-1.88.88c.08-.07 1.31-1.11 2.74-2.29 2.76-2.29 5.9-5.03 6.47-5.64l.35-.37.34.32c.18.18.43.52.55.75zm-3.09-.03c-.27.25-1.75 1.53-3.27 2.85s-3.35 2.91-4.06 3.53c-1.44 1.25-1.44 1.25.4-1.14 1.42-1.85 2.16-2.54 4.2-3.91.99-.66 2.96-1.78 3.16-1.78.03 0-.16.2-.43.45zm14.27 1.26c.07.39.17 1.6.21 2.68l.07 1.97-.46-.21c-1.58-.73-6.02-3.23-5.85-3.3.97-.39 5.76-1.98 5.82-1.92.04.04.14.39.21.78zm-3.76 3.53c1.85 1.09 3.38 1.99 3.4 2.01.02.02-.22.22-.52.44-.59.43-6.85 3.67-6.94 3.59-.03-.03.06-.57.19-1.19.26-1.26.48-5.02.38-6.21-.04-.42-.02-.72.04-.68.04.03 1.6.95 3.45 2.04zm-5.11-.8c.14 1.17-.03 3.52-.35 4.75-.37 1.44-.59 2.04-.75 2.09-.22.07-1.59-1.17-2.42-2.21-.84-1.05-1.95-3.02-1.78-3.18.1-.1 4.98-2.11 5.14-2.11.04-.01.11.29.16.66zm-5.99 2.94c.52 1.07 1.7 2.61 2.99 3.92.83.84 1.04 1.11.91 1.2-.58.39-3.18 1.61-4.82 2.25-1.99.78-4.58 1.68-4.64 1.6-.02-.03.57-1.11 1.32-2.4 1.62-2.81 3.67-6.8 3.67-7.13.01-.41.18-.24.57.56zm-3.07.07c-.03.08-.28.7-.55 1.38-1.15 2.92-3.39 6.89-3.89 6.89-.39 0-.96-2.31-1.12-4.53l-.08-1.12 2.74-1.38c1.51-.76 2.79-1.38 2.85-1.38.06-.01.08.06.05.14zm18.29 2.7c.01 1.68-.69 5.75-1.07 6.16-.16.17-1.89-.47-3.46-1.28-1.4-.72-3.71-2.15-3.71-2.3 0-.04.35-.22.79-.4.83-.35 4.7-2.42 6.34-3.39l.94-.56.08.43c.04.24.08.85.09 1.34zm-25.81 1.94c.16 1.33.57 2.96 1.08 4.25.21.53.36.99.33 1.01-.2.18-8.43 2.45-9.52 2.62l-.52.08.08-.4c.11-.57.91-2.19 1.5-3.07.74-1.09 2.56-2.92 3.76-3.77.9-.63 3.06-1.9 3.12-1.82.04.01.1.5.17 1.1zm18.67 2.81c2.54 1.22 3.5 1.64 4.72 2.06l.93.32-.59.3c-3.33 1.69-9.23 4.09-10.75 4.39-.34.07-.39.05-.32-.12.26-.68 3.78-7.95 3.85-7.95.04 0 1.02.45 2.16 1zm-4.47-.27c-.18.86-1.15 3.63-1.71 4.89-.49 1.1-1.62 3.23-1.82 3.43-.09.09-2.1-1.04-3.05-1.72-1.07-.76-3.41-3.02-3.34-3.23.03-.08 1.45-.63 3.17-1.22 3.62-1.25 5.64-2 6.23-2.31.56-.3.61-.28.52.16zm10.12 3.82c-.03.25-.24 1.34-.46 2.45-.69 3.46-1.53 5.83-2.06 5.83-.74 0-5.78-1.22-7.41-1.8-1.11-.39-2.06-.84-2.38-1.11-.2-.17-.09-.23 1.35-.82 4.66-1.9 10.04-4.33 10.62-4.79.35-.28.4-.24.34.24zm-23.6 1.06c-.53.95-1.61 2.51-3.68 5.3l-1.76 2.38-.53-.38c-.74-.53-1.92-1.81-2.41-2.62-.53-.87-.89-1.95-.93-2.77l-.03-.64.87-.09c1.18-.12 4.49-.8 6.84-1.42 1.07-.28 1.96-.49 1.98-.48.01.03-.14.35-.35.72zM67.03 70c.59.42 1.4.96 1.81 1.2l.75.44-.34.14c-.19.08-2.93 1.08-6.1 2.22-5.41 1.95-5.76 2.07-5.91 1.87-.09-.12-.15-.24-.14-.28.01-.04 1.47-1.93 3.25-4.2l3.23-4.13 1.19.99c.67.55 1.67 1.33 2.26 1.75zm1.33 6.21c-1.18 1.77-2.18 3.26-2.22 3.3-.09.12-1.98-.32-3.39-.8-1.48-.5-3.31-1.42-4.03-2.04l-.52-.45 1.17-.32c4.77-1.3 11.08-2.97 11.11-2.95.02.02-.94 1.49-2.12 3.26zm5.67-2.68c2.53.87 4.83 1.36 7.82 1.68l.82.09-2.23.8c-5.56 2.01-10.07 3.42-12.33 3.86-.64.12-1.22.23-1.28.23-.06 0 .39-.62 1.01-1.38 1.7-2.07 3.54-4.43 4.03-5.16.24-.35.48-.65.53-.65.06.01.79.24 1.63.53zm8.29 4.68c-.96 2.47-1.66 3.98-1.9 4.07-.47.18-7.04-.78-9.05-1.33-1.33-.36-2.18-.71-1.93-.8.1-.03 1.05-.26 2.12-.5 3.47-.78 8.77-2.39 10.97-3.33.28-.12.53-.21.55-.19.02.02-.32.95-.76 2.08zM43.47 80.3c-.47.2-.69.59-.74 1.32-.05.68-.05.69-.39.69s-.35.02-.31.5c.03.45.07.5.36.54l.32.04v3.66l.55-.05.56-.04.04-1.8.04-1.8h1.64v1.32c0 1.64.17 2.07.88 2.31.32.11.62.13.94.06.45-.09.47-.12.51-.6l.04-.51-.39.07c-.68.12-.72.04-.7-1.62l.01-1.02h.34c.59 0 .72-.11.72-.6v-.46h-1.06v-.44c0-.65-.11-.76-.72-.72l-.52.03-.04.56-.04.56h-1.63v-.4c0-.55.29-.82.79-.72.38.07.39.07.39-.32 0-.21-.07-.46-.14-.54-.16-.14-1.1-.16-1.45-.02zM17.41 80.49c-.51.36-.26 1.11.38 1.11.66 0 .78-.09.78-.6-.01-.65-.59-.91-1.16-.51zM8.75 80.81c-.18.13-.2.43-.17 3.15l.03 3 .56.04.56.04v-2.61c0-1.44.03-2.59.06-2.56.04.03.38.98.77 2.11s.79 2.28.89 2.56l.19.51.59-.05.59-.04.9-2.5.9-2.5.06 2.5c.04 1.38.08 2.52.09 2.54.01.02.28.02.58 0l.56-.04.03-2.99c.02-2.11-.01-3.04-.11-3.16-.21-.26-1.54-.21-1.78.06-.1.12-.52 1.09-.92 2.15-.4 1.06-.76 1.97-.8 2.02-.04.05-.39-.8-.78-1.88-.39-1.1-.82-2.08-.97-2.23-.21-.21-.39-.27-.95-.27-.37 0-.77.07-.88.15zM20.87 82.31c-.86.28-1.37 1.17-1.37 2.42 0 1.4.53 2.16 1.65 2.35.51.09 1.38-.11 1.68-.38.2-.18.29-.85.13-1-.04-.04-.26.03-.49.16-.85.46-1.48.2-1.68-.69-.13-.59.01-1.35.32-1.68.25-.27.87-.29 1.35-.04.45.23.58.15.58-.37 0-.29-.07-.45-.28-.58-.36-.25-1.42-.34-1.89-.19zM25.46 82.55c-.41.36-.41.36-.45.09-.03-.23-.11-.28-.54-.31l-.5-.04v4.72h1.18v-1.46c0-1.46 0-1.46.35-1.84.29-.31.42-.37.77-.33.44.05.53-.05.53-.6 0-.68-.68-.8-1.34-.23zM28.72 82.33c-.95.28-1.53 1.39-1.41 2.7.11 1.21.73 1.9 1.85 2.06 1.98.27 3.27-1.35 2.71-3.39-.34-1.2-1.7-1.8-3.15-1.37zm1.38.92c.62.33.78 1.77.27 2.45-.32.42-1.03.5-1.46.16-.26-.21-.28-.31-.28-1.19 0-.91.02-.98.33-1.25.34-.3.78-.36 1.14-.17zM33.58 82.36c-.6.26-.82.61-.82 1.26 0 .7.22.96 1.27 1.46.6.29.73.4.73.65 0 .21-.09.33-.33.41-.3.1-.58.05-1.53-.25-.18-.06-.21-.01-.18.39.03.38.1.49.39.63.49.24 1.67.22 2.16-.04.71-.38.93-1.53.41-2.11-.12-.13-.55-.4-.98-.6-.78-.37-.97-.64-.7-.96.18-.21.71-.21 1.24.01.35.15.42.15.48.01.12-.32-.02-.7-.31-.85-.39-.21-1.39-.21-1.83-.01zM38.35 82.28c-1.04.37-1.51 1-1.61 2.12-.12 1.38.38 2.26 1.46 2.58 1.81.53 3.22-.52 3.21-2.39-.01-1.13-.52-1.96-1.4-2.26-.41-.14-1.34-.17-1.66-.05zm1.37 1.14c.31.26.33.34.33 1.17 0 .78-.03.92-.29 1.19-.37.39-1.07.42-1.42.07-.3-.3-.39-.69-.32-1.5.04-.53.12-.71.37-.94.42-.36.91-.35 1.33.01zM17.29 84.63l.03 2.34h1.18v-4.6l-.62-.03-.62-.04.03 2.33zM11.66 89.91c-1.51.33-2.65 1.16-3.25 2.39-.37.75-.39.86-.39 2.08 0 1.18.03 1.36.32 1.96.63 1.29 1.79 2.2 4.21 3.3 2.64 1.2 3.36 1.94 3.36 3.47 0 1.39-.65 2.22-2.08 2.66-1.42.44-2.84.23-4.68-.69-.61-.31-1.16-.58-1.2-.6-.05-.02-.16.05-.27.15-.22.23-.26 1.37-.05 1.75.44.83 2.75 1.6 4.76 1.6 3.78 0 6.22-2.25 6.02-5.56-.04-.72-.13-1.07-.43-1.67-.59-1.19-1.35-1.81-3.66-2.94-1.07-.52-2.24-1.15-2.61-1.4-1.46-.98-1.8-2.65-.77-3.81.57-.65 1.15-.86 2.34-.87 1.13 0 1.59.12 2.89.78 1.12.57 1.22.52 1.22-.59 0-1-.06-1.09-1.08-1.56-1.35-.59-3.16-.77-4.65-.45zM27.42 89.84c-2.23.36-3.95 1.44-5.1 3.21-.58.9-.9 1.74-1.2 3.16-.33 1.55-.25 5 .14 6.42.96 3.49 3.11 5.17 6.79 5.33 1.94.08 2.69-.06 4.59-.87.07-.03.39.17.71.44 1.22 1.06 3.9 2.58 4.84 2.76.58.11.74-.08.74-.9 0-.38-.03-.77-.07-.88-.04-.11-.6-.46-1.26-.79-1.01-.5-3.03-1.8-3.03-1.95 0-.03.19-.29.41-.59.95-1.24 1.52-2.97 1.72-5.21.15-1.71.01-3.54-.38-4.96-.71-2.57-2.44-4.34-4.88-5-.81-.2-3.13-.31-4.02-.17zm3.54 2.25c1.4.52 2.33 1.58 2.87 3.23.27.83.32 1.21.37 2.97.07 2.36-.11 3.5-.73 4.82-.99 2.12-3.16 3.18-5.69 2.79-3.14-.48-4.52-2.85-4.36-7.5.09-2.67.57-4.07 1.81-5.25.73-.7 1.26-1.01 2.11-1.22.98-.26 2.72-.18 3.62.16zM59.29 89.92c-1.45.35-2.68 1.25-3.21 2.33-.6 1.24-.62 2.99-.05 4.12.67 1.33 1.57 2.02 4.37 3.35 2.12 1.01 2.83 1.6 3.12 2.59.34 1.17-.1 2.39-1.08 3.03-1.53.99-3.71.83-6.04-.44-1.05-.57-1.2-.51-1.2.5 0 .94.13 1.22.77 1.59 1.97 1.16 5.25 1.31 7.29.35 2.46-1.16 3.57-4.21 2.41-6.63-.15-.31-.57-.85-.95-1.22-.58-.57-1.04-.85-2.98-1.8-3.22-1.58-3.86-2.26-3.67-3.87.1-.8.52-1.39 1.26-1.76.51-.26.79-.31 1.57-.31 1.16 0 1.63.12 2.8.72 1 .51 1.21.55 1.32.27.14-.35.07-1.52-.1-1.77-.23-.32-1.4-.84-2.39-1.05s-2.35-.22-3.24 0zM40.96 90.11c-.11.11-.14 2.18-.14 8.6v8.46l.29.29.29.29h4.18c3.2 0 4.2-.04 4.3-.15.18-.23.26-.92.16-1.38l-.09-.41-3.35-.06-3.35-.06-.03-7.77c-.02-6.03-.06-7.79-.17-7.86-.25-.14-1.93-.11-2.09.05zM72.39 94.53c-.57.09-1.71.54-2.18.86-1.13.77-1.93 2-2.38 3.65-.28 1.05-.28 3.64 0 4.71.58 2.19 1.86 3.52 3.9 4.06.89.23 3.14.23 4.24 0 1.04-.22 2.12-.62 2.32-.85.19-.22.18-1.41-.01-1.6-.1-.1-.41-.03-1.24.25-3.19 1.08-5.65.61-6.6-1.26-.28-.55-.54-1.65-.54-2.27v-.33h4.05c2.56 0 4.18-.05 4.41-.13.52-.18.66-.63.57-1.79-.18-2.3-.95-3.74-2.46-4.65-.96-.58-2.74-.87-4.08-.65zm2.16 1.85c1.2.36 1.94 1.38 2.05 2.79l.06.81h-6.78l.08-.49c.21-1.22.72-2.13 1.51-2.67.89-.61 2-.77 3.08-.44zM86.14 94.56c-.56.18-1.37.83-1.95 1.56l-.56.72-.06-1.05-.06-1.05-.7-.04c-.39-.02-.82-.01-.97.03l-.27.06v6.41c0 5.74.02 6.41.19 6.48.24.09 1.63.09 1.86 0 .17-.06.19-.55.19-4.25v-4.18l.52-.73c.71-1 1.63-1.81 2.16-1.91.28-.05.72-.01 1.24.12.51.13.85.16.92.09.06-.06.1-.54.08-1.04-.03-.9-.05-.94-.38-1.09-.41-.2-1.76-.28-2.21-.13zM106.42 94.57c-.93.16-2.25.84-2.93 1.52-1.29 1.29-1.83 3.07-1.74 5.71.08 2.38.52 3.56 1.77 4.73 1.19 1.13 2.45 1.5 4.73 1.43 1.67-.06 3.17-.39 3.86-.85.34-.23.38-.32.41-.9.02-.35-.02-.72-.08-.82-.12-.19-.02-.21-2.01.42-.81.25-1.24.31-2.24.32-1.98.01-3-.52-3.67-1.88-.28-.57-.38-.97-.43-1.63l-.06-.87 4.24-.03c5.09-.04 4.75.07 4.74-1.5-.01-2.76-1.2-4.68-3.35-5.43-.78-.26-2.35-.37-3.24-.22zm2.22 1.82c1.17.35 1.94 1.39 2.1 2.86l.08.73h-6.78l.07-.59c.17-1.44 1.16-2.68 2.44-3.07.49-.15 1.45-.11 2.09.07zM120.32 94.55c-.76.25-1.81 1.13-2.39 2-.19.29-.2.27-.2-.65 0-.58-.05-1-.14-1.08-.19-.19-1.65-.19-1.84 0-.2.2-.2 12.59 0 12.79.19.19 1.88.19 2.07 0 .1-.1.14-1.22.14-4.27v-4.13l.44-.65c.65-.97 1.47-1.73 2.04-1.9.49-.15.68-.13 1.99.21.37.1.48-.11.48-.9 0-.88-.08-1.12-.45-1.29-.38-.17-1.75-.26-2.14-.13zM89 94.86c-.12.15.24 1.25 2.06 6.33 1.21 3.38 2.3 6.25 2.42 6.38.45.46 2.68.35 2.88-.14.15-.39 4.28-11.86 4.36-12.13.14-.47-.11-.61-1.12-.61-.59 0-.96.05-1.03.15-.06.08-.9 2.47-1.86 5.31-.96 2.84-1.78 5.12-1.83 5.06-.05-.05-.87-2.37-1.82-5.16s-1.79-5.13-1.86-5.22c-.18-.23-2.02-.2-2.2.03z"></path>
    </svg>
        </div>
        <div className="icon-div deg225">
        <svg viewBox="0 0 128 128" width="60" height="60">
    <path fill="#cbd0e4" d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z"></path><path fill="#E48E00" d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816a.98.98 0 01.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 011.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395a9.075 9.075 0 01-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z"></path><path fill="#00618A" d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 01-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 01-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 00-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z"></path>
    </svg>
        </div>
        <div className="icon-div deg315">
        <svg viewBox="0 0 128 128" width="60" height="60">
    <path clip-rule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"></path>
    </svg>
        </div>

        <div className="icon-div deg315">
        <svg viewBox="0 0 128 128" width="60" height="60">
    <path fill=" " d="M85.988 76.075c.632-5.262.443-6.034 4.362-5.182l.995.088c3.014.137 6.957-.485 9.272-1.561 4.986-2.313 7.942-6.177 3.026-5.162-11.215 2.313-11.986-1.483-11.986-1.483C103.5 45.204 108.451 22.9 104.178 17.44 92.524 2.548 72.35 9.59 72.012 9.773l-.108.021c-2.216-.461-4.695-.735-7.481-.78-5.075-.083-8.926 1.331-11.847 3.546 0 0-35.989-14.827-34.315 18.646.356 7.121 10.207 53.882 21.956 39.758 4.294-5.164 8.444-9.531 8.444-9.531 2.061 1.369 4.528 2.067 7.116 1.816l.2-.17c-.062.641-.035 1.268.081 2.01-3.027 3.383-2.137 3.977-8.189 5.222-6.122 1.262-2.525 3.508-.178 4.095 2.848.713 9.433 1.722 13.884-4.509l-.177.711c1.188.95 1.107 6.827 1.275 11.026.168 4.199.45 8.117 1.306 10.429.856 2.31 1.866 8.261 9.819 6.557 6.646-1.426 11.727-3.476 12.19-22.545"></path><path d="M71.208 102.77c-3.518 0-5.808-1.36-7.2-2.674-2.1-1.981-2.933-4.534-3.43-6.059l-.215-.637c-1.002-2.705-1.341-6.599-1.542-11.613a199.25 199.25 0 01-.075-2.352c-.017-.601-.038-1.355-.068-2.146a15.157 15.157 0 01-3.997 1.264c-2.48.424-5.146.286-7.926-.409-1.961-.49-3.999-1.506-5.16-3.076-3.385 2.965-6.614 2.562-8.373 1.976-3.103-1.035-5.88-3.942-8.491-8.89-1.859-3.523-3.658-8.115-5.347-13.646-2.94-9.633-4.808-19.779-4.974-23.109-.522-10.427 2.284-17.883 8.34-22.16 9.555-6.749 24.03-2.781 29.307-.979 3.545-2.137 7.716-3.178 12.43-3.102 2.532.041 4.942.264 7.181.662 2.335-.734 6.949-1.788 12.23-1.723 9.73.116 17.793 3.908 23.316 10.966 3.941 5.036 1.993 15.61.48 21.466-2.127 8.235-5.856 16.996-10.436 24.622 1.244.009 3.045-.141 5.607-.669 5.054-1.044 6.531 1.666 6.932 2.879 1.607 4.867-5.378 8.544-7.557 9.555-2.792 1.297-7.343 2.086-11.071 1.915l-.163-.011-.979-.086-.097.816-.093.799c-.25 9.664-1.631 15.784-4.472 19.829-2.977 4.239-7.116 5.428-10.761 6.209a16.146 16.146 0 01-3.396.383zm-7.402-35.174c2.271 1.817 2.47 5.236 2.647 11.626.022.797.043 1.552.071 2.257.086 2.134.287 7.132 1.069 9.244.111.298.21.602.314.922.872 2.672 1.31 4.011 5.081 3.203 3.167-.678 4.794-1.287 6.068-3.101 1.852-2.638 2.888-7.941 3.078-15.767l3.852.094-3.826-.459.112-.955c.367-3.148.631-5.424 2.736-6.928 1.688-1.207 3.613-1.09 5.146-.814-1.684-1.271-2.15-2.765-2.274-3.377l-.321-1.582.902-1.34c5.2-7.716 9.489-17.199 11.767-26.018 2.34-9.062 1.626-13.875.913-14.785-9.446-12.071-25.829-7.088-27.539-6.521l-.29.156-1.45.271-.743-.154c-2.047-.425-4.321-.66-6.76-.7-3.831-.064-6.921.841-9.455 2.764l-1.758 1.333-2.041-.841c-4.358-1.782-17.162-5.365-23.918-.58-3.75 2.656-5.458 7.861-5.078 15.47.125 2.512 1.833 12.021 4.647 21.245 3.891 12.746 7.427 16.979 8.903 17.472.257.087.926-.433 1.591-1.231 4.326-5.203 8.44-9.54 8.613-9.723l2.231-2.347 2.697 1.792c1.087.723 2.286 1.132 3.518 1.209l6.433-5.486-.932 9.51c-.021.214-.031.504.053 1.044l.28 1.803-1.213 1.358-.14.157 3.534 1.632 1.482-1.853z"></path><path fill="#336791" d="M103.646 64.258c-11.216 2.313-11.987-1.484-11.987-1.484 11.842-17.571 16.792-39.876 12.52-45.335C92.524 2.547 72.35 9.59 72.013 9.773l-.109.019c-2.216-.459-4.695-.733-7.482-.778-5.075-.083-8.925 1.33-11.846 3.545 0 0-35.99-14.826-34.316 18.647.356 7.121 10.207 53.882 21.956 39.758 4.294-5.164 8.443-9.531 8.443-9.531 2.061 1.369 4.528 2.067 7.115 1.816l.201-.17c-.062.641-.034 1.268.08 2.01-3.026 3.383-2.138 3.977-8.188 5.222-6.123 1.262-2.526 3.508-.177 4.095 2.847.713 9.433 1.722 13.883-4.509l-.178.711c1.186.95 2.019 6.179 1.879 10.919s-.233 7.994.702 10.536c.935 2.541 1.866 8.261 9.82 6.557 6.646-1.425 10.09-5.116 10.57-11.272.34-4.377 1.109-3.73 1.158-7.644l.618-1.853c.711-5.934.113-7.848 4.208-6.957l.995.087c3.014.138 6.958-.485 9.273-1.561 4.986-2.314 7.943-6.177 3.028-5.162z"></path><path fill="#fff" d="M71.61 100.394c-6.631.001-8.731-5.25-9.591-7.397-1.257-3.146-1.529-15.358-1.249-25.373a1.286 1.286 0 012.57.072c-.323 11.551.136 22.018 1.066 24.346 1.453 3.632 3.656 6.809 9.887 5.475 5.915-1.269 8.13-3.512 9.116-9.23.758-4.389 2.254-16.874 2.438-19.338a1.285 1.285 0 012.563.191c-.192 2.564-1.682 15.026-2.469 19.584-1.165 6.755-4.176 9.819-11.11 11.306a15.462 15.462 0 01-3.221.364zM35.659 74.749a5.343 5.343 0 01-1.704-.281c-4.307-1.437-8.409-8.451-12.193-20.849-2.88-9.438-4.705-19.288-4.865-22.489-.475-9.49 1.97-16.205 7.265-19.957 10.476-7.423 28.1-.354 28.845-.05a1.285 1.285 0 01-.972 2.379v.001c-.17-.07-17.07-6.84-26.392-.229-4.528 3.211-6.607 9.175-6.18 17.729.135 2.696 1.84 12.311 4.757 21.867 3.378 11.067 7.223 18.052 10.548 19.16.521.175 2.109.704 4.381-2.026 4.272-5.14 8.197-9.242 8.236-9.283a1.286 1.286 0 011.856 1.778c-.039.04-3.904 4.081-8.116 9.148-1.995 2.398-3.908 3.102-5.466 3.102zm55.92-10.829a1.284 1.284 0 01-1.065-2.004c11.971-17.764 16.173-39.227 12.574-43.825-4.53-5.788-10.927-8.812-19.012-8.985-5.987-.13-10.746 1.399-11.523 1.666l-.195.079c-.782.246-1.382-.183-1.608-.684a1.29 1.29 0 01.508-1.631l.346-.142-.017.005.018-.006c1.321-.483 6.152-1.933 12.137-1.864 8.947.094 16.337 3.545 21.371 9.977 2.382 3.044 2.387 10.057.015 19.24-2.418 9.362-6.968 19.425-12.482 27.607a1.282 1.282 0 01-1.067.567zm.611 8.223c-2.044 0-3.876-.287-4.973-.945-1.128-.675-1.343-1.594-1.371-2.081-.308-5.404 2.674-6.345 4.195-6.774-.212-.32-.514-.697-.825-1.086-.887-1.108-2.101-2.626-3.037-4.896-.146-.354-.606-1.179-1.138-2.133-2.883-5.169-8.881-15.926-5.028-21.435 1.784-2.549 5.334-3.552 10.566-2.992-1.539-4.689-8.869-19.358-26.259-19.643-5.231-.088-9.521 1.521-12.744 4.775-7.217 7.289-6.955 20.477-6.952 20.608a1.284 1.284 0 11-2.569.067c-.016-.585-.286-14.424 7.695-22.484 3.735-3.772 8.651-5.634 14.612-5.537C75.49 7.77 82.651 13.426 86.7 18.14c4.412 5.136 6.576 10.802 6.754 12.692.133 1.406-.876 1.688-1.08 1.729l-.463.011c-5.135-.822-8.429-.252-9.791 1.695-2.931 4.188 2.743 14.363 5.166 18.709.619 1.108 1.065 1.909 1.269 2.404.796 1.93 1.834 3.227 2.668 4.269.733.917 1.369 1.711 1.597 2.645.105.185 1.603 2.399 10.488.565 2.227-.459 3.562-.066 3.97 1.168.803 2.429-3.702 5.261-6.196 6.42-2.238 1.039-5.805 1.696-8.892 1.696zm-3.781-3.238c.281.285 1.691.775 4.612.65 2.596-.112 5.335-.677 6.979-1.439 2.102-.976 3.504-2.067 4.231-2.812l-.404.074c-5.681 1.173-9.699 1.017-11.942-.465a4.821 4.821 0 01-.435-.323c-.243.096-.468.159-.628.204-1.273.357-2.589.726-2.413 4.111zm-36.697 7.179c-1.411 0-2.896-.191-4.413-.572-1.571-.393-4.221-1.576-4.18-3.519.045-2.181 3.216-2.835 4.411-3.081 4.312-.888 4.593-1.244 5.941-2.955.393-.499.882-1.12 1.548-1.865.99-1.107 2.072-1.669 3.216-1.669.796 0 1.45.271 1.881.449 1.376.57 2.524 1.948 2.996 3.598.426 1.488.223 2.92-.572 4.032-2.608 3.653-6.352 5.582-10.828 5.582zm-5.817-3.98c.388.299 1.164.699 2.027.916 1.314.328 2.588.495 3.79.495 3.662 0 6.601-1.517 8.737-4.506.445-.624.312-1.415.193-1.832-.25-.872-.87-1.665-1.509-1.931-.347-.144-.634-.254-.898-.254-.142 0-.573 0-1.3.813-.614.686-1.055 1.246-1.446 1.741-1.678 2.131-2.447 2.854-7.441 3.883-1.218.252-1.843.506-2.153.675zm9.882-5.928a1.286 1.286 0 01-1.269-1.09 6.026 6.026 0 01-.064-.644c-3.274-.062-6.432-1.466-8.829-3.968-3.031-3.163-4.411-7.545-3.785-12.022.68-4.862.426-9.154.289-11.46a25.514 25.514 0 01-.063-1.425c.002-.406.01-1.485 3.615-3.312 1.282-.65 3.853-1.784 6.661-2.075 4.654-.48 7.721 1.592 8.639 5.836 2.478 11.46.196 16.529-1.47 20.23-.311.688-.604 1.34-.838 1.97l-.207.557c-.88 2.36-1.641 4.399-1.407 5.923a1.287 1.287 0 01-1.075 1.466l-.197.014zM44.634 35.922l.051.918c.142 2.395.406 6.853-.31 11.969-.516 3.692.612 7.297 3.095 9.888 1.962 2.048 4.546 3.178 7.201 3.178h.055c.298-1.253.791-2.575 1.322-4l.206-.553c.265-.712.575-1.401.903-2.13 1.604-3.564 3.6-8 1.301-18.633-.456-2.105-1.56-3.324-3.375-3.726-3.728-.824-9.283 1.98-10.449 3.089zm7.756-.545c-.064.454.833 1.667 2.001 1.829 1.167.163 2.166-.785 2.229-1.239.063-.455-.833-.955-2.002-1.118-1.167-.163-2.166.073-2.228.528zm2.27 2.277l-.328-.023c-.725-.101-1.458-.558-1.959-1.223-.176-.233-.464-.687-.407-1.091.082-.593.804-.947 1.933-.947.253 0 .515.019.78.055.616.086 1.189.264 1.612.5.733.41.787.866.754 1.103-.091.653-1.133 1.626-2.385 1.626zm-1.844-2.201c.037.28.73 1.205 1.634 1.33l.209.015c.834 0 1.458-.657 1.531-.872-.077-.146-.613-.511-1.631-.651a4.72 4.72 0 00-.661-.048c-.652-.001-1.001.146-1.082.226zm35.121-1.003c.063.455-.832 1.668-2.001 1.83-1.168.162-2.167-.785-2.231-1.24-.062-.454.834-.955 2.002-1.117 1.168-.164 2.166.074 2.23.527zm-2.27 2.062c-1.125 0-2.094-.875-2.174-1.442-.092-.681 1.029-1.199 2.185-1.359.254-.036.506-.054.749-.054.997 0 1.657.293 1.723.764.043.306-.191.777-.595 1.201-.266.28-.826.765-1.588.87l-.3.02zm.759-2.427c-.223 0-.455.017-.69.049-1.162.161-1.853.628-1.82.878.039.274.78 1.072 1.75 1.072l.239-.017c.634-.089 1.11-.502 1.337-.741.356-.375.498-.727.481-.848-.021-.157-.449-.393-1.297-.393zm3.194 26.453a1.285 1.285 0 01-1.067-2c2.736-4.087 2.235-8.256 1.751-12.286-.207-1.718-.42-3.493-.364-5.198.056-1.753.278-3.199.494-4.599.255-1.657.496-3.224.396-5.082a1.286 1.286 0 012.567-.138c.114 2.124-.159 3.896-.423 5.611-.204 1.323-.415 2.691-.466 4.29-.049 1.509.144 3.112.348 4.808.516 4.287 1.099 9.146-2.167 14.023-.248.37-.655.571-1.069.571z"></path><path d="M2.835 103.184a26.23 26.23 0 014.343-.338c2.235 0 3.874.52 4.914 1.456.962.832 1.534 2.106 1.534 3.667 0 1.586-.469 2.834-1.353 3.744-1.196 1.274-3.146 1.924-5.356 1.924-.676 0-1.3-.026-1.819-.156v7.021H2.835v-17.318zm2.263 8.45c.494.13 1.118.182 1.872.182 2.729 0 4.394-1.326 4.394-3.744 0-2.314-1.638-3.432-4.134-3.432-.988 0-1.742.078-2.132.182v6.812zm22.23 2.47c0 4.654-3.225 6.683-6.267 6.683-3.406 0-6.032-2.496-6.032-6.475 0-4.212 2.756-6.682 6.24-6.682 3.615-.001 6.059 2.626 6.059 6.474zm-9.984.13c0 2.756 1.586 4.836 3.822 4.836 2.184 0 3.821-2.054 3.821-4.888 0-2.132-1.065-4.836-3.77-4.836s-3.873 2.496-3.873 4.888zm12.557 3.926c.676.442 1.872.91 3.016.91 1.664 0 2.444-.832 2.444-1.872 0-1.092-.649-1.69-2.34-2.314-2.262-.806-3.328-2.054-3.328-3.562 0-2.028 1.638-3.692 4.342-3.692 1.274 0 2.393.364 3.095.78l-.572 1.664a4.897 4.897 0 00-2.574-.728c-1.352 0-2.106.78-2.106 1.716 0 1.04.755 1.508 2.393 2.132 2.184.832 3.302 1.924 3.302 3.796 0 2.21-1.716 3.77-4.706 3.77-1.378 0-2.652-.338-3.536-.858l.57-1.742zm13.365-13.859v3.614h3.275v1.742h-3.275v6.786c0 1.56.441 2.444 1.716 2.444a5.09 5.09 0 001.326-.156l.104 1.716c-.441.182-1.144.312-2.027.312-1.066 0-1.925-.338-2.471-.962-.649-.676-.884-1.794-.884-3.276v-6.864h-1.95v-1.742h1.95v-3.016l2.236-.598zm16.536 3.615c-.053.91-.104 1.924-.104 3.458v7.306c0 2.886-.572 4.654-1.794 5.747-1.222 1.144-2.99 1.508-4.576 1.508-1.508 0-3.172-.364-4.187-1.04l.572-1.742c.832.52 2.132.988 3.692.988 2.34 0 4.056-1.222 4.056-4.394v-1.404h-.052c-.702 1.17-2.054 2.106-4.004 2.106-3.12 0-5.356-2.652-5.356-6.137 0-4.264 2.782-6.682 5.668-6.682 2.185 0 3.381 1.144 3.927 2.184h.052l.104-1.898h2.002zm-2.366 4.966c0-.39-.026-.728-.13-1.04-.416-1.326-1.534-2.418-3.198-2.418-2.185 0-3.744 1.846-3.744 4.758 0 2.47 1.248 4.524 3.718 4.524 1.404 0 2.678-.884 3.172-2.34.13-.39.183-.832.183-1.222v-2.262zm5.901-1.04c0-1.482-.026-2.756-.104-3.926h2.003l.077 2.47h.104c.572-1.69 1.95-2.756 3.484-2.756.26 0 .441.026.649.078v2.158a3.428 3.428 0 00-.779-.078c-1.612 0-2.757 1.222-3.068 2.938a6.44 6.44 0 00-.104 1.066v6.708h-2.262v-8.658zm9.517 2.782c.052 3.094 2.027 4.368 4.315 4.368 1.639 0 2.626-.286 3.484-.65l.39 1.638c-.806.364-2.184.78-4.186.78-3.874 0-6.188-2.548-6.188-6.344 0-3.796 2.236-6.787 5.902-6.787 4.108 0 5.2 3.614 5.2 5.928 0 .468-.052.832-.078 1.066h-8.839zm6.708-1.638c.025-1.456-.599-3.718-3.172-3.718-2.314 0-3.328 2.132-3.511 3.718h6.683z"></path><path fill="#336791" d="M84.371 117.744a8.016 8.016 0 004.056 1.144c2.314 0 3.666-1.222 3.666-2.99 0-1.638-.936-2.574-3.302-3.484-2.86-1.014-4.628-2.496-4.628-4.966 0-2.73 2.262-4.758 5.668-4.758 1.794 0 3.094.416 3.874.858l-.624 1.846a6.98 6.98 0 00-3.328-.832c-2.392 0-3.302 1.43-3.302 2.626 0 1.638 1.065 2.444 3.484 3.38 2.964 1.145 4.472 2.574 4.472 5.148 0 2.704-2.002 5.044-6.136 5.044-1.69 0-3.536-.494-4.473-1.118l.573-1.898zm27.586 5.33a94.846 94.846 0 01-6.708-2.028c-.364-.13-.728-.26-1.066-.26-4.16-.156-7.722-3.224-7.722-8.866 0-5.616 3.432-9.23 8.164-9.23 4.758 0 7.853 3.692 7.853 8.866 0 4.498-2.08 7.384-4.992 8.398v.104c1.742.442 3.64.858 5.122 1.118l-.651 1.898zm-1.872-11.414c0-3.51-1.819-7.125-5.538-7.125-3.822 0-5.694 3.536-5.668 7.333-.026 3.718 2.028 7.072 5.564 7.072 3.615 0 5.642-3.276 5.642-7.28zm5.329-8.684h2.263v15.626h7.488v1.898h-9.751v-17.524z"></path>
    </svg>
        </div>
        </div>

        </>
    }
    </div>
    </div>
  </div>
  </div>
  )
}

export default Skills;