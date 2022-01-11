import PostItem from './post_item.jsx'
import React, { useState, useEffect } from 'react';
import axios from "axios"

function PostContainer() {
  const posts = [<PostItem title='abc'/>, <PostItem title='abc1'/>]
  const [postlist, setPostlist] = useState([]);

  useEffect(async ()=>{
    // add axios
    const result = await axios.get("http://localhost/api/blog/")
    // console.log(result.data)
    const retrieved_posts = result.data
    console.log(retrieved_posts)
    const post_doms = retrieved_posts.map(x => (
      <PostItem title={x.title} preview={x.content.substring(0,5)}/>
    ))
    console.log(postlist.length)
    if(!postlist.length) setPostlist(post_doms)
  });

  return (
    <div className="post-container">
    post container
    {postlist}
    </div>
  );
}

export default PostContainer;
