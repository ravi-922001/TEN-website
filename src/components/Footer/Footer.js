import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
        <div className="container d-flex justify-content-evenly mt-5">
            <div className="d-flex align-items-center">
                <div className="fb-icon mx-3">
                    <i className="fab fa-facebook-square display-4"></i>
                </div>
                <div className="tw-icon mx-3">
                    <i className="fab fa-twitter display-4"></i>
                </div>
                <div className="ig-icon mx-3">
                    <i className="fab fa-instagram display-4"></i>
                </div>
            </div>

            <div>
                <div className="text-center h5 fw-normal">
                    Subscribe to our newsletter
                </div>
                <form className="my-2">
                    <div className="sub-form">
                        <input type="text" placeholder="Full Name" className="p-2 m-1" />
                        <input type="text" placeholder="College Name" className="p-2 m-1" />
                    </div>
                    <div className="sub-form">
                        <input type="text" placeholder="Mobile No." className="p-2 m-1" />
                        <input type="email" placeholder="Email" className="p-2 m-1" />
                    </div>
                    <div className="my-1">
                        <input type="checkbox" checked />
                        <label className="fst-italic mx-2">Join TEN's Discord Community</label>
                    </div>
                    <div className="text-center my-3">
                        <button type="submit" className="px-4 submit">Submit</button>
                    </div>
                </form>
            </div>

            <div className="d-flex flex-column my-4">
                <div className="mb-1">
                    <a href="/" className="text-dark text-decoration-none h5">About Us</a>
                </div>
                <div className="mb-1">
                    <a href="/" className="text-dark text-decoration-none h5">FAQ's</a>
                </div>
                <div className="mb-1">
                    <a href="/" className="text-dark text-decoration-none h5">Contact Us</a>
                </div>
            </div>
            
        </div>
        <footer>
        <div className="text-center h5 py-2 mb-0">
            &copy; 2020 Limitless Technologies - The Entrepreneurship Network
        </div>
    </footer>
    </>
    )
}

export default Footer
