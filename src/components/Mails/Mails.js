import React from 'react'
import "./Mails.css"

const Mails = ({ShowPost,clickDeleteHandler}) => {
  return (
    <React.Fragment>
      {ShowPost?<div className="center-email-content">
        <h2>{ShowPost.title}</h2>
        <p>{ShowPost.body}</p>
        <button className="btn btn-outline-danger p-3" onClick={clickDeleteHandler}>Delete</button>
      </div>:<h3 style={{textAlign:"center"}}>Please Select a Post!!</h3>}
    </React.Fragment>
  )
}

export default Mails