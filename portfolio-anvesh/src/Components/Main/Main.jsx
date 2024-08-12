import React from 'react';
import '../../Styles/Main.css';
import { Header } from '../Header/Header';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };
    const handleProjectClick=()=>{
        navigate('/project');
    }

    return (
        <div className="bmg">
            <Header />
            <div className="container mt-5 bc">
                <div className='row'>
                    <div className='col' style={{color:'#fff'}}>
                        <h1>Hi there!</h1>
                        <p className='h5 typing-animation' style={{display:'block'}}>I am <span className="h4">Anvesh...</span></p>
                    </div>
                    <div className='col'>
                        <div className='text-center ms-2 bv' style={{position:'relative', left:'40px', top:'20px'}}>
                            <img className='img-small' src="../assets/Anvesh p.png" alt="" />
                        </div>
                        <p className='justify-content' style={{color:'#fff'}}>Full Stack Developer dedicated to crafting innovative web solutions, enhancing user experiences, and staying updated with industry advancements.</p>
                        <div className='d-flex mt-4' style={{gap:'50px'}}>
                            <Button variant="outlined" style={{color:'#fff', fontWeight:'bold', borderColor:'#fff'}} onClick={handleAboutClick}>About Me</Button>
                            <Button variant="outlined" style={{color:'#fff', fontWeight:'bold', borderColor:'#fff'}}onClick={handleProjectClick}>Projects</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
