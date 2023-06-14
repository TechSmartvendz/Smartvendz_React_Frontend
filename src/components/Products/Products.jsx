import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {ProductsData} from '../../Route/SubLinkJSON';

function Products() {
const [subLinkJSON,setSubLinkJSON]=useState(ProductsData);
  return (
    <>
      <SubLink sublinks={subLinkJSON} />
    </>
  )
}

export default Products
