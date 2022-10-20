import React from 'react';

const PostItem = ({post}) => {
    return (
      <div style={{margin:'14px'}}>
       <h2 >{post.title}</h2>
          <h4>id:{post.id}</h4>
          <div><p>{post.body}</p></div>

      </div>
    );
};

export default PostItem;
