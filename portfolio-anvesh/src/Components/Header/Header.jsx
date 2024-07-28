import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../Styles/Header.css'; // Custom CSS file

export const Header = () => {
    return (
        <nav className="navbar navbar-dark fixed-top he">
            <div className="container-fluid fg">
                <a className="navbar-brand lg img-fluid ms-2" href="#">
                    {/* <img src="/assets/Anveshlogo.png" alt=""  style={{height:'auto',width:'100px',color:'black'}}/> */}
                    <p className='text-center mt-2' style={{fontWeight:'bold'}}>Personal</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-none d-lg-flex flex-grow-1">
                    <ul className="navbar-nav flex-row ms-auto">
                        <li className="nav-item ms-3">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link active" aria-current="page" href="#">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="offcanvas offcanvas-end d-lg-none" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{ background: '#0055ff', color: 'white' }}>
                    <div className="offcanvas-header">
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
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
