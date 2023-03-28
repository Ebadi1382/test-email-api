import React from 'react'
import BuildMail from '../BuildMail/BuildMail'

const AllMail = ({post,setShowPost}) => {
  return (
    <React.Fragment>
        {post.map((item,index)=> {
            return <BuildMail title={item.title} key={index} author={item.author} post={item} setShowPost={setShowPost}/>
        })}
    </React.Fragment>
  )
}

export default AllMail