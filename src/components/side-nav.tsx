import Avatar from "./avatar"
import "./styles/side-nav.css";
import avatar from "../assets/avatar.jpg";
import {Icon} from "@iconify/react"

const SideNav = (props: {toggleNav:()=>void}) =>{
    return <div onClick={props.toggleNav} className="side-nav">
        <Avatar image={avatar} name="Daniju Farouq" />
        <ul>
            <a href="/"><li>Home</li></a>
            <a href="/portfolio/#about"><li>About me</li></a>
            <a href="/portfolio/#contact"><li>contact me</li></a>
            <a href="/portfolio/#projects"><li>projects</li></a>
            <a href="/portfolio/#certificatons"><li>certifications</li></a>

            <a href="/#actions"><li>My Resume</li></a>
        </ul>
        <Icon className="icn" icon="material-symbols-light:cancel-outline" />
    </div>
}

export default SideNav