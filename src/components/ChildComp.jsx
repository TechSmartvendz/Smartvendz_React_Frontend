import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
//import {RouteJSON} from './RouteJSON';



function ParentComp(props) {

const [subLinkJSON,setLinkJSON]=useState(props.sublinks);
const [title,setTitle]=useState(props.title);

  return (
    <div>
      
      <p>{title}</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default ParentComp
