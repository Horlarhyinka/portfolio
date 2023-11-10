import { useEffect } from "react";
import "./styles/index.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { Link } from "react-router-dom";
import handleScrollTo from "../functions/handleScrollTo";
import Contacts from "../components/contacts";
import Resume from "../assets/Resume.pdf"

const Home = () =>{

    const technologies: ({name: string, percentage: number})[] = [
    {name: "NodeJS", percentage: 95},
    {name: "Javascript", percentage: 95},
    {name: "typescript", percentage: 95},
    {name: "SQL", percentage: 95},
    {name: "mongodb", percentage: 95},
    {name: "django", percentage: 85},
    {name: "python", percentage: 85},
    {name: "react", percentage: 90},
    {name: "docker", percentage: 90},
    {name: "aws", percentage: 90},

]

useEffect(handleScrollTo,[window.location.hash])

    return <div className="home" >
            <h1 className="alias" >WEBDAEMON</h1>
            <ul className="stacks" >
                <li>node js</li>
                <li>javascript</li>
                <li>typescript</li>
                <li>django</li>
                <li>python</li>
                <li>mongoDB</li>
                <li>sql</li>
            </ul>
            <br></br>
            <p className="writeup">
            Welcome to my Backend Developer Portfolio! I'm Daniju Farouq, a passionate and experienced backend developer with a keen eye for crafting efficient, scalable, and secure web applications. With a foundation in creating robust server-side solutions and a commitment to staying at the forefront of technological advancements, I invite you to explore my portfolio to discover the projects I've worked on and the skills that set me apart in the world of web development. Whether it's optimizing databases, designing APIs, or ensuring seamless server performance, I'm here to bring your digital ideas to life. Let's dive into the code and build a better web together.</p>
            <div style={{textAlign: "center"}} >

            {
                technologies.map((technology, i)=><div key={i} style={{width: "100px", display: "inline-block", textAlign: "center" }} ><CircularProgressbar 
                styles={buildStyles({
                    textSize: "18px",
                    textColor: "white",
                    pathColor: "magenta",
                })}
                className="progressbar" value={technology.percentage} text={`${technology.percentage}%`} />
                <p style={{display: "inline-block", width: "100%", textAlign:"center", marginTop: "0px", fontSize: "14px"}} >{technology.name}</p>
                </div>)
            }
            </div> 
            <br></br>
            <div id="actions" style={{textAlign: "center", marginTop: "65px", marginBottom: "25px"}} >
            <a href={Resume} download ><button className="resume" >download Resume</button></a>  
            <Link to={"/portfolio"} ><button className="portfolio" >view Portfolio</button></Link>
            </div>
            <Contacts />
        </div>
}

export default Home;