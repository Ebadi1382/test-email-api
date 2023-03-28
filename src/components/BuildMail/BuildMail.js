import React from 'react'
import "./BuildMail.css"

const BuildMail = ({title,author,post,setShowPost}) => {
  const clickShowHandler = ()=> {
    setShowPost(post)
  }
  return (
    <div className="box" onClick={clickShowHandler}>
        <h6>{title}</h6>
        <p>{author}</p>
    </div>
  )
}

export default BuildMail