import "./styles/portfolio.css";
import Avatar from "../components/avatar";
import avatar from "../assets/avatar.jpg";
import projectsList from "../assets/projects"
import ProjectCard from "../components/project-card";
import CertificationCard from "../components/certification-card";
import certifications from "../assets/certifications";
import Contacts from "../components/contacts";
import React, { useEffect, useState } from "react";
import handleScrollTo from "../functions/handleScrollTo";
import aboutWriteUp from "../assets/about";
import Head from "../components/head";

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


  const [navOpen, setNavOpen] = useState<boolean>(false)

  const toggleNav = () =>{
    if(navOpen){
      setNavOpen(false)
    }else{
      setNavOpen(true)
    }
  }


    return <div className="portfolio" >
        <Head toggleNav={toggleNav}  />
        <Avatar name="Daniju Farouq" image={avatar} />
        <p id="about" className="writeup" >{hidden?aboutWriteUp.slice(0, textCount): aboutWriteUp}
        {aboutWriteUp.length > textCount && <span style={{cursor: "pointer", fontWeight: "480"}} onClick={toggleHidden} > {hidden?"  ...show more": "\n show less..."}</span>}
        </p>
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