import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {UserManagerData} from '../../Route/SubLinkJSON';



function UserManage() {
const [subLinkJSON,setSubLinkJSON]=useState(UserManagerData);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default UserManage


   
  //  "addnewuser"
  //  "listuser"
  //  "userpermission" 

