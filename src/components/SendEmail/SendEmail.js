import axios from 'axios'
import React, { useState } from 'react'
import "./SendEmail.css"

const SendEmail = () => {
  const [Title, setTitle] = useState("")
  const [Content, setContent] = useState("")
  const clickSendHandler = (e)=> {
    e.preventDefault()
    const data = {
      title: Title,
      content: Content,
      author:"Alireza"
    }
    axios.post("/posts",data)
    .then((Response)=> {
      console.log(Response.data)
    })
  }

  const inputDetailHandler = (e)=> {
    setTitle(e.target.value)
  }
  const textareaDetailHandler = (e)=> {
    setContent(e.target.value)
  }
  return (
    <React.Fragment>
        <div className="title">
            <h1>Add Post</h1>
        </div>
        <form className="form-center">
            <label htmlFor="input">Title</label>
            <input id="input" type="text" className="form-control mt-2 mb-5" onChange={inputDetailHandler}/>
            <label htmlFor="textarea">Content</label>
            <textarea id="textarea" rows="8" className="form-control mt-2 mb-5" onChange={textareaDetailHandler}></textarea>
            <label htmlFor="select">Author</label>
            <select id="select" className="select form-select mb-5 mt-2 mb-5">
                <option value="one">Alireza</option>
                <option value="two">hesam</option>
                <option value="three">mmd</option>
            </select>
            <button className="btn btn-outline-success mb-5" onClick={clickSendHandler}>Add Post</button>
        </form>
    </React.Fragment>
  )
}

export default SendEmail