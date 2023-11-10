import "./styles/avatar.css"

const Avatar = (props:{image: string, name: string}) =>{
    return <div className="avatar" >
        <img src={props.image} alt={props.name} />
        <p>{props.name}</p>
    </div>
}

export default Avatar;