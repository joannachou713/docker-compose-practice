import Comment from './comment.jsx'
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios"

function Post(props) {
  let params = useParams();

  const [info, setInfo] = useState({
    comments: [],
    post: ''
  });

  useEffect(async ()=>{
    // add post content
    const post_result = await axios.get(`http://localhost/api/blog/${params.postId}`)
    const post_dom = (<>
      <div>{post_result.data.title}</div>
      <div>{post_result.data.content}</div>
      </>
    )
    // add comment
    const result = await axios.get("http://localhost/api/comment/")
    const retrieved_comments = result.data.filter(d => d.blog==params.postId)
    console.log(retrieved_comments)
    const comment_doms = retrieved_comments.length ? (retrieved_comments.map(x => (
      <>
      <div>{`${x.user}: ${x.text}`}</div>
      </>
    ))
    ):(<div>No comments yet</div>)
    console.log(comment_doms)
    if(info.comments.length == 0 && info.post.length == 0) setInfo({comments: comment_doms, post: post_dom})
  });

  const { post, comments } = info

  return (
    <div className="post">
      post content
      {post}
      comments section
      {comments}
    </div>
  );
}

export default Post;
