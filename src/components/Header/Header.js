import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Navbar from './Navbar/Navbar'

function Header() {
    return (
        <div className="complete-header">
        <div className="container d-flex justify-content-between header_box">
            <div className="mx-5">
                <Link to='/' className="text-decoration-none">
                    <div className="title-initials d-inline">T</div><span className="title-last">he</span><br />
                    <div className="title-initials d-inline">E</div><span className="title-last">ntrepreneurship</span><br />
                    <div className="title-initials d-inline">N</div><span className="title-last">etwork</span>
                </Link>
            </div>


            <div className="d-flex flex-column align-items-center mt-3">
                <div className="d-flex my-2 mb-3">
                    <Link to="/cart" className="cart-style mx-5">
                        <i className="fas fa-shopping-cart py-3 px-5 text-dark"></i>
                    </Link>
                    <Link to='/login' className="login shadow-sm bg-gray text-decoration-none">
                        <i className="fas fa-user py-3 px-2 text-dark"></i>
                        <span className="py-3 text-dark">Log In</span>
                    </Link>
                </div>
                <div className="search-box">
                    <input placeholder="Search here..." />
                </div>
            </div>
        </div>

        <Navbar />
        </div>
    )
}

export default Header
