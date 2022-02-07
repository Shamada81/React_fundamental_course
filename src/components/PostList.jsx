import React from 'react';
import PostItem from "./PostItem";

const PostList = (props) => {

    return (
        <div>
            <h1 style={{ textAlign:'center'}}>{props.title}</h1>
            {
                props.post.map((post, index) => (
                    <PostItem post={post} number={index + 1} key={post.id} onClick={props.onClick}/>
                ))
            }
        </div>
    );
};

export default PostList;