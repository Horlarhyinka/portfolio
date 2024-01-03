import "./styles/head.css";
import {Icon} from "@iconify/react"

const Head = (props: {toggleNav: ()=>void}) =>{
    return <div className="head" >
      <div className="title" >
        <h1>Daniju Farouq</h1>
        <h4>Software Engineer</h4>
      </div>
      <ul className="nav" >
            <a href="/"><li>Home</li></a>
            <a href="/portfolio/#about"><li>About me</li></a>
            <a href="/portfolio/#contact"><li>contact me</li></a>
            <a href="/portfolio/#projects"><li>projects</li></a>
            <a href="/portfolio/#certificatons"><li>certifications</li></a>
        </ul>
      <Icon onClick={props.toggleNav} className="hamburger" icon="streamline:interface-setting-menu-parallel-hamburger-circle-navigation-parallel-hamburger-buttonmenu-circle" />

    </div>
}

export default Head