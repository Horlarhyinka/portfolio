import { useParams } from "react-router-dom"
import "./styles/project.css"
import projectsList from "../assets/projects";
import { Icon } from "@iconify/react";
interface project_int{
    name: string
    description: string
    url: string
    github: string
    technologies: string[]
    preview_image: string
}

const Project = () =>{
    const {projectId} = useParams()
    const project: project_int = projectsList[Number(projectId)]
    return !projectId || !project?<h1 className="null" >
        project not found
    </h1>:<div className="project" >
        <div className="image-wrapper" >
            <img src={ project.preview_image} alt="" />
            <ul>
            {project.technologies.map((tech, i)=><li key={i} >{tech}</li>)}</ul>
        </div>
        <div className="texts-wrapper" >
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="link"><Icon className="icn" icon="gg:link" /><a href={project.url} >{project.url}</a></div>
            <div className="link"><Icon className="icn" icon="simple-icons:github" /><a href={project.github}>{project.github}</a></div>
        </div>

    </div>


}

export default Project