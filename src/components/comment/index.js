import React from 'react'

export default function Comment({username,caption}) {
    return (
        <div className="comment">
              <p>
          <span style={{fontWeight:"500",marginRight:"9px"}}>
              {username}
          </span>
          {caption}
        </p>
        </div>
    )
}
