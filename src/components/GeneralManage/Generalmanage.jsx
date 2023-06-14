import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {GeneralManagerData} from '../../Route/SubLinkJSON';



function Generalmanage() {
const [subLinkJSON,setSubLinkJSON]=useState(GeneralManagerData);
  return (
   
    <React.Fragment>
       <SubLink sublinks={subLinkJSON} />
      </React.Fragment>
  )
}

export default Generalmanage
