import { Icon } from '@iconify/react';
import "./styles/certification-card.css"

const CertificationCard = (props: {name: string, link: string})=>{
    return <div className="certification-card" >
        <Icon className='icn' icon="la:certificate" />
        <p>{props.name}</p>
        <a href={props.link} target='_blank' >view <Icon className='icn' icon="majesticons:open" /></a>
    </div>
}

export default CertificationCard