import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [ posts , setPosts ] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'React', body: 'Description' },
        { id: 3, title: 'Java', body: 'Description' },
        { id: 4, title: 'PHP', body: 'Description' },
        { id: 5, title: 'Python', body: 'Description' },
        { id: 6, title: 'C#', body: 'Description' },
        { id: 7, title: 'Kotlin', body: 'Description' },
    ])

    const [ filter, setFilter ] = useState({sort: '', query: ''})
    const [ modal, setModal ] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const removePost = (id) => {
        setPosts( posts.filter((post, index) => post.id !== id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
        console.log(newPost)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{ margin: '15px 0'}}/>
           <PostFilter
               filter={filter}
               setFilter={setFilter}
           />
            {

                    <PostList post={sortedAndSearchedPosts} remove={removePost} title='Список постов'/>

            }
        </div>
    );
}

export default App;
