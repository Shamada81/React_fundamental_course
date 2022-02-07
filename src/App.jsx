import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [ posts , setPosts ] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'React', body: 'Description' },
        { id: 3, title: 'Java', body: 'Description' },
        { id: 4, title: 'PHP', body: 'Description' },
        { id: 5, title: 'Python', body: 'Description' },
        { id: 6, title: 'C#', body: 'Description' },
        { id: 7, title: 'Kotlin', body: 'Description' },
    ]);


    const handleClick = (id) => {
        setPosts( posts.filter((post, index) => post.id !== id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        console.log(newPost);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList post={posts} onClick={handleClick} title='Список постов'/>
        </div>
    );
}

export default App;
