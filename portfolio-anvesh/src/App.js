import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './Components/Main/Main';
import { About } from './Components/About/About';
import { Project } from './Components/Projects/Project';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
