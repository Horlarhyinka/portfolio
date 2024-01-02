import "./styles/project-card.css"
const ProjectCard = (props: {name: string, description: string, image: string, i: number}) =>{
    
    return <a className="project-card" href={`/projects/${props.i}`} >
        <img src={props.image} alt={props.name} />
        <p className="name">{props.name}</p>
    </a>
}

export default ProjectCard;