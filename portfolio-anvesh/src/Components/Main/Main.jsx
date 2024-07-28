import React from 'react';
import '../../Styles/Main.css'; // Custom CSS file for Main component
import { Header } from '../Header/Header'; // Import your existing Header component

export const Main = () => {
    return (
        <div className="bmg">
            <Header />
            jbbdjbfkjdg
            <div className="container mt-5">
                <div className="row box">
                    <div className="col">
                        <h1>Hi there!</h1>
                        <p>I am <span>Anvesh...</span></p>
                    </div>
                    <div className="col">
                        {/* You can add other content here */}
                    </div>
                </div>
            </div>
        </div>
    );
};
