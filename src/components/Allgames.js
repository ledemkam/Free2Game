import Header from './Header'
import Button from './Button'
import '../css/Allgames.css';
import React, { Component } from 'react';
import ApiAllgames from './Apiallgames'
// import Card from './Card'
import Select from './Selectmenu'


const Allgames = () => {
    return (
        <div className="detailsgame">
            <Header />
            <div className="detailimg">
                <img src="../img/allgames.png" alt="" />
            </div>
            <h1 className="allgamestitel">all games</h1>
            <div>
                <div>
                    <Select />
                </div>
                <ApiAllgames />
            </div>
        </div>
    );
}

export default Allgames;