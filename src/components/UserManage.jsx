import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {UserManagerData} from '../Route/SubLinkJSON';



function UserManage() {
const [subLinkJSON,setSubLinkJSON]=useState(UserManagerData);
  return (
   <React.Fragment>
     <div className='mesgarea'></div>
      <SubLink sublinks={subLinkJSON} />
      </React.Fragment>
  )
}

export default UserManage


   
  //  "addnewuser"
  //  "listuser"
  //  "userpermission" 

