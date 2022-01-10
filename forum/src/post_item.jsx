function PostItem(props) {
  return (
    <div className="post-item">
      {props.title} ||
      {props.preview}
    </div>
  );
}

export default PostItem;
