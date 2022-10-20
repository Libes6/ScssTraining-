import React from 'react';
import PostItem from "./PostItem";

const Result = ({posts}) => {
    return (
        <div>
            {posts.map((post)=><PostItem key={post.id} post={post}/>)}
        </div>
    );
};

export default Result;
