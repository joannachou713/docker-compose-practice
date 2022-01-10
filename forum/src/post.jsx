import Comment from './comment.jsx'
import { useParams } from "react-router-dom";

function Post(props) {
  let params = useParams();
  const comments = [<Comment content="commentContent" />]

  return (
    <div className="post">
      {params.postId}
      post contents
      {comments}
    </div>
  );
}

export default Post;
