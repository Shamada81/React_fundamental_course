import React from 'react';

const PostItem = (props) => {
    const {id, title, body } = props.post;
    const { number } = props;



    return (
            <div className="post">
                <div className="post__content">
                    <strong>{number}. {title}</strong>
                    <div>
                        {body}
                    </div>
                </div>
                <div className="post__btns" onClick={() => props.onClick(id)}>
                    <button>Удалить</button>
                </div>
            </div>
    );
};

export default PostItem;