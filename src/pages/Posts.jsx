import React, {useEffect, useMemo, useRef, useState} from 'react';

import '../styles/App.css'
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";



function Posts() {
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
    const [ totalPages, setTotalPages ] = useState(0)
    const [ limit, setLimit ] = useState(10)
    const [ page, setPage ] = useState(1)
    const lastElement = useRef()

    const [ fetchPosts, isPostsLoading, postError ] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })


    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit])


    const removePost = (id) => {
        setPosts( posts.filter((post, index) => post.id !== id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
        console.log(newPost)
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                ?????????????? ????????????????????????
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{ margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value={filter}
                onChange={value => setLimit(value)}
                defaultValue='???????????????????? ?????????????????? ???? ????????????????'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: '???????????????? ??????'},
                ]}
            />
            {postError &&
            <h1>?????????????????? ????????????</h1>
            }
            <PostList post={sortedAndSearchedPosts} remove={removePost} title='???????????? ????????????'/>
            <div ref={lastElement} style={{height: 20, background: 'red'}} />
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <Loader/>
                </div>
            }

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
