import React, {useContext} from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const { setIsAuth } = useContext(AuthContext)
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <MyButton onClick={() => {
                    setIsAuth(false)
                    localStorage.removeItem('auth')
                }}>
                    Выйти
                </MyButton>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;