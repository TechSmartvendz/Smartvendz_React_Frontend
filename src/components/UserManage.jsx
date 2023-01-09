import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {UserManagerData} from '../Route/SubLinkJSON';
import './Usermanage/UserManage.css'


function UserManage() {
const [subLinkJSON,setSubLinkJSON]=useState(UserManagerData);
  return (
   <React.Fragment>
     <div className='mesgarea'></div>
     <div className='btn_container'>
      <SubLink sublinks={subLinkJSON} />
      </div>
      </React.Fragment>
  )
}

export default UserManage


   
  //  "addnewuser"
  //  "listuser"
  //  "userpermission" 

