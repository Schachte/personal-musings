function BlogPost(props) {
  return (
    <div className="post">
        <div className="post-title">
            <span className="posting-date">{props.date}</span>
            <span className="posting-title">{props.title}</span>
        </div>
        <div className="post-tags">
            <span className="tag post-tag-purple">Health</span>
            <span className="tag post-tag-green">Algorithms</span>
        </div>
    </div>
    );
}

export default BlogPost;