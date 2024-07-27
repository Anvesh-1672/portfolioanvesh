import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../Styles/Header.css'; // Custom CSS file

export const Header = () => {
    return (
        <nav className="navbar nav navbar-expand-lg navbar-dark bg-dark fixed-top he">
            <div className="container">
                <a className="navbar-brand lg img-fluid ms-2" href="#">
                    <img className='container' src="../assets/Anveshlogo.png" alt=""
                     style={{ width: '150px', height: 'auto' }}  /> 
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header ">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Kuncham Anvesh</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body he">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
