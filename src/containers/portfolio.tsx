import "./styles/portfolio.css";
import projectsList from "../assets/projects"
import ProjectCard from "../components/project-card";
import CertificationCard from "../components/certification-card";
import certifications from "../assets/certifications";
import Contacts from "../components/contacts";
import React, { useEffect, useState } from "react";
import handleScrollTo from "../functions/handleScrollTo";
import aboutWriteUp from "../assets/about";
import { Icon } from '@iconify/react';

const Portfolio = () =>{

    useEffect(handleScrollTo, [window.location.hash])
    const textCount = 700

    const messageRef = React.createRef<HTMLTextAreaElement>()

    const [hidden, setHidden] = useState<boolean>(true)
    const toggleHidden = (): void =>{
        if(hidden){
            setHidden(false)
        }else{
            setHidden(true)
        }
    }

    const handleSendMessage = () =>{
        const emailLink = `mailto:danijufarouq2003@gmail.com?body=${messageRef.current?.value}`;
        window.location.href = emailLink;

    }

    return <div className="portfolio" >
        {/* <Avatar name="Daniju Farouq" image={avatar} /> */}
        <p id="about" className="writeup" >{hidden?aboutWriteUp.slice(0, textCount): aboutWriteUp}
        {aboutWriteUp.length > textCount && <span style={{cursor: "pointer", fontWeight: "480"}} onClick={toggleHidden} > {hidden?"  ...show more": "\n show less..."}</span>}
        </p>
        <h1 className="sub-header" >Technologies</h1>
        <div className="technologies" >
        <ul className="stack" >
            <h1>Backend development</h1>
            <li>
              <p>Nodejs</p>
              <Icon className="icn" icon="logos:nodejs" />
            </li>
            <li>
              <p>Javascript</p>
              <Icon className="icn" icon="logos:javascript" />
            </li>
            <li>
              <p>Typescript</p>
              <Icon className="icn" icon="devicon:typescript" />
            </li>
            <li>
              <p>Python</p>
              <Icon className="icn" icon="logos:python" />
            </li>
            <li>
              <p>Django</p>
              <Icon className="icn" icon="skill-icons:django" />
            </li>
            <li>
              <p>Mongodb</p>
              <Icon className="icn" icon="devicon:mongodb-wordmark" />
            </li>
            <li>
              <p>Mysql</p>
              <Icon className="icn" icon="logos:mysql" />
            </li>
            <li>
              <p>Postgresql</p>
              <Icon className="icn" icon="devicon:postgresql-wordmark" />
            </li>
            <li>
              <p>Rabbitmq</p>
               <Icon className="icn" icon="skill-icons:rabbitmq-light" />
            </li>
            <li>
              <p>Redis</p>
              <Icon className="icn" icon="devicon:redis-wordmark" />
            </li>
            <li>
              <p>Jest</p>
              <Icon className="icn" icon="logos:jest" />
            </li>
            <li>
              <p>Docker</p>
              <Icon className="icn" icon="devicon:docker-wordmark" />
            </li>
            <li>
              <p>AWS</p>
              <Icon className="icn" icon="skill-icons:aws-light" />
            </li>
          </ul>
          <ul className="stack" >
            <h1>Frontend development</h1>
            <li>
              <p>React</p>
              <Icon className="icn" icon="vscode-icons:file-type-reactjs" />
            </li>
            <li>
              <p>HTML5</p>
              <Icon className="icn" icon="logos:html-5" />
            </li>
            <li>
              <p>CSS3</p>
              <Icon className="icn" icon="logos:css-3" />
            </li>
            <li>
              <p>Javascript</p>
              <Icon className="icn" icon="logos:javascript" />
            </li>
            <li>

            </li>
            <li>
              <p>Redux</p>
              <Icon className="icn" icon="logos:redux" />
            </li>
            <li>
              <p>Typescript</p>
              <Icon className="icn" icon="devicon:typescript" />
            </li>
          </ul>
        </div>
        <h1 className="sub-header" >Projects</h1>
        <div id="projects" className="projects"  >
        {
            projectsList.map((project, i)=><ProjectCard i={i} image={project.preview_image} name={project.name} description={project.description} key={i} />)
        }
        </div>
        <h1 className="sub-header" >Certifications</h1>
        <div id="certifications" className="certifications" >
        {
            certifications.map((certificate, i)=><CertificationCard name={certificate.name} link={certificate.link} key={i} />)
        }
        </div>
        <div id="contact" >
        <h1 className="sub-header" >contact me</h1>
        <p className="writeup" style={{textAlign: "left"}} >I'm available for hire, whether full-time, part-time, or on a contract basis. Let's connect and embark on exciting tech adventures together!</p>
        <h1 className="sub-header" >send a message</h1>
        <textarea ref={messageRef} name="message" id="message" rows={4} ></textarea>
        <br></br>
        {/* <a href={`mailto:danijufarouq2003@gmail.com?body=${messageRef.current?.value}`} > */}
        <button onClick={handleSendMessage} className="message" >send message</button>
        {/* </a> */}
        <Contacts />
        </div>
    </div>
}

export default Portfolio