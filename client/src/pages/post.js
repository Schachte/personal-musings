import React from 'react';
import PostContainer from '../components/Post/PostContainer'

function Post({match}) {
    const slugName = match.params.slug
    return (
      <div>
          <PostContainer title={slugName} />
      </div>
    );
  }
  
  export default Post;