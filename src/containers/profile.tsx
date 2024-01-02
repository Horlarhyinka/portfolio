import "./styles/profile.css";
import avatar from "../assets/avatar.jpg";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import Resume from "../assets/Resume.pdf"

export default ()=>{
    return <div className="profile" >
        <h1>Profile</h1>
        <div className="wrapper-1" >
        <img src={avatar} alt="avatar" />
        <h2>Daniju Farouq</h2>
        <h4>Software Engineer</h4>
        <div className="mern" >
        <Icon className="icn" icon="devicon:mongodb-wordmark" />
        <Icon className="icn" icon="skill-icons:expressjs-light" />
        <Icon className="icn" icon="vscode-icons:file-type-reactjs" />
        <Icon className="icn" icon="logos:nodejs" />
        </div>
        <div className="contact" > 
        <div className="wrp" >
            <Icon className="icn phone" icon="ic:round-local-phone" />
            <p>+234 906 544 5036</p>
        </div>
        <div className="wrp" >
        <Icon className="icn email" icon="logos:google-gmail" />
            <p>danijufarouq2003@gmail.com</p>
        </div>
        <div className="wrp" >
        <Icon className="icn" icon="zondicons:location" color="blue" />
            <p>Lagos, Nigeria</p>
        </div>
         </div>
        </div>
        <a  href={Resume} download ><button>download Resume</button></a>
        <Link to="/portfolio" ><button>view portfolio</button></Link>
    </div>
}