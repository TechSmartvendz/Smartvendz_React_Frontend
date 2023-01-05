import React from 'react'

function ChildRoute(props) {
const [ChildJSON,setChildJSON]=useState(props.data);
  return (
    <Route exact path={ChildJSON.path} element={<ChildComp sublinks={ParentJSON.sublinks} title={ParentJSON.title} />}>
        {
         
            
        }
   </Route>
  )
}

export default ChildRoute
