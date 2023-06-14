import React from 'react'

function Message_box() {
  return (
    <React.Fragment>
   
    <div className='success_msg'>
    Successfully added data..!
    </div>

    <div className='warning_msg'>
    Please enter valid data... !!
    </div> 

    <div className='reject_msg'>
    Rejected.....?
    </div>
    
    
    </React.Fragment>
  )
}

export default Message_box