import React from 'react';

function PostContainer(props) {
  return (
        <div className="blog-posts">
          {props.children}
        </div>
    );
}

export default PostContainer;