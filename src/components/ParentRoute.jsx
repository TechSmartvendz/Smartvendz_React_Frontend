import React from 'react'

function ParentRoute(props) {
const [ParentJSON,setParentJSON]=useState(props.data);
  return (
    <Route exact path={ParentJSON.path} element={<ParentComp sublinks={ParentJSON.sublinks} title={ParentJSON.title} />}>
        {
         
            
        }
   </Route>
  )
}

export default ParentRoute
