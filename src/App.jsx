import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

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
    const [ selectedSorted, setSelectedSorted ] = useState('')


    const removePost = (id) => {
        setPosts( posts.filter((post, index) => post.id !== id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        console.log(newPost);
    }
    const sortPosts = (sort) => {
        setSelectedSorted(sort);
        console.log(sort);
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{ margin: '15px 0'}}/>
            <MySelect
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
                value={selectedSorted}
                onChange={sortPosts}
            />
            {
                posts.length !== 0
                    ?
                        <PostList post={posts} remove={removePost} title='Список постов'/>
                    :
                        <h1 style={{ textAlign: 'center'}}>
                            Список пуст
                        </h1>
            }
        </div>
    );
}

export default App;
