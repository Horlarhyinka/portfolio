import "./styles/contacts.css";
import {Icon} from "@iconify/react"

const Contacts = () =>{
    return <div id="socials" className="contacts" >
        <a href="tel:+2349065445036" ><Icon style={{color: "#13e728", fontSize: "22px"}} className="icn" icon="ion:call" /></a>
        <a href="mailto:danijufarouq2003@gmail.com" ><Icon style={{ fontSize: "19px"}} className="icn" icon="logos:google-gmail" /></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FDanijuFarouq" ><Icon style={{fontSize: "22px"}} className="icn" icon="skill-icons:twitter" /></a>
        <a href="https://www.linkedin.com/in/farouq-daniju-9440a2219" ><Icon className="icn" icon="devicon:linkedin" /></a>
        <a href="https://github.com/Horlarhyinka" ><Icon style={{fontSize: "26px", color: "black"}} className="icn" icon="jam:github" /></a>

    </div>
}

export default Contacts