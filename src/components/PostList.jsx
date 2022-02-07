import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = (props) => {

    if(!props.post.length) {
        return (
            <h1 style={{textAlign:'center'}}>Список компонентов пуст</h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign:'center'}}>{props.title}</h1>
            <TransitionGroup>
                {props.post.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem post={post} number={index + 1} remove={props.remove}/>
                    </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;