import React from 'react'

function Comment({commentProp}) {
    
  const {user, comment} = commentProp
    return (
    <div>
        <div>
            {user}
        </div>
        <div> 
            {comment}
        </div>
    </div>
  )
}

export default Comment
