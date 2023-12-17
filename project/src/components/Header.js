import React from 'react';
import DownArrow from '../images/arrow-down.svg';
import '../App.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='svg'>
                <img src={DownArrow} alt='Down arrow'/>
            </div>
        </div>
    );
}
