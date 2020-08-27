import React from 'react';
import image from '../../fakedata/header-image.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header d-flex justify-content-around p-3">
                <div className="header-title">
                    <h2>Online Crush Course</h2> 
                    <p>by</p>
                    <h1>Lutu Putu Web</h1>
                </div>
                <div className="header-img">
                <img src={image} alt=""/>
                </div>
            </div>
            <nav className="navbar">
                    <a href="/home">Home</a>
                    <a href="/courses">Courses</a>
                    <a href="/contact">Contact</a>
                    <a href="/others">Others</a>
            </nav>    
        </div>
    );
};

export default Header;