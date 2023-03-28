import axios from "axios";
import React, { useEffect, useState } from "react";
import AllMail from "../../components/AllMail/AllMail";
import Mails from "../../components/Mails/Mails"
import SendEmail from "../../components/SendEmail/SendEmail";
import "./MainEmail.css"

const MainEmail = () => {
    const [Post, setPost] = useState([])
    const [ShowPost, setShowPost] = useState(null)
    const [Error, setError] = useState(null)
    useEffect(() => {
      axios.get("/posts")
      .then(Response=> {
        const post =Response.data.splice(0,9)
        const updatedPosts = post.map((item)=> {
            return{ ...item , author:"Alireza"}
        })
        setPost(updatedPosts)
    })
      .catch(error=>{ 
        setError("connection faild Please refresh page")
        console.log("main api faild")
      }
        )
    }, [])

    const clickDeleteHandler= ()=> {
      axios.delete(`/posts/${Post}`).then((Response)=> {
        console.log(Response.data)
      })
    }
  return (
    <React.Fragment>
      <header className="nav">
        <ul className="nav-ul">
          <li><a href="/">Home</a></li>
          <li><a href="/new-post" className="ms-5">New Post</a></li>
        </ul>
      </header>
      {Error?<p style={{textAlign:"center",fontSize:"2rem"}}>{Error}</p>:<section className="main-box">
        <AllMail post={Post} title={Post} setShowPost={setShowPost}/>
      </section>}
      <section className="main">
      <Mails ShowPost={ShowPost} clickDeleteHandler={clickDeleteHandler}/>
      </section>
      <section className="send-email">
        <SendEmail />
      </section>
    </React.Fragment>
  );
};

export default MainEmail;
