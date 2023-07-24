import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {ProductsData} from '../../Route/SubLinkJSON';

function ProductsManage() {
const [subLinkJSON,setSubLinkJSON]=useState(ProductsData);
  return (
    <>
      <SubLink sublinks={subLinkJSON} />
    </>
  )
}

export default ProductsManage;
