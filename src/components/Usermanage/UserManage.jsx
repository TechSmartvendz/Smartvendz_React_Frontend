import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {UserManagerData} from '../../Route/SubLinkJSON';



function UserManage() {
const [subLinkJSON,setSubLinkJSON]=useState(UserManagerData);
  return (
   <>
 
    <SubLink sublinks={subLinkJSON} />
      
   </>
  )
}

export default UserManage


   
  
