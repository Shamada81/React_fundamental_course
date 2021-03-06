import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate();
    const {id, title, body } = props.post;

    return (
            <div className="post">
                <div className="post__content">
                    <strong>{id}. {title}</strong>
                    <div>
                        {body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton  onClick={() => router(`/posts/${id}`, {replace: true})}>
                        Открыть
                    </MyButton>
                    <MyButton  onClick={() => props.remove(id)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
    );
};

export default PostItem;