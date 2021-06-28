import React, { Component } from 'react';
import '../css/Selectmenu.css';


class Select extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true,
        });
    }

    render() {
        return (
            <div className="allselect">
                <div className="select">
                    <button className="buttonselect" onClick={this.showMenu}>
                        Platform<img src="./img/arrowdown.png" alt="" />
                    </button>
                    {
                        this.state.showMenu
                            ? (
                                <div className="menu">
                                    <div><input type="checkbox" /><span> All Platforms </span></div> <br />
                                    <div><input type="checkbox" /><span> Windows (PC) </span></div><br />
                                    <div><input type="checkbox" /><span> Browser (Web) </span></div>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                </div>

                <div className="select1">
                    <button className="buttonselect1" onClick={this.showMenu}>
                        Genre/Tag<img src="./img/arrowdown.png" alt="" />
                    </button>

                    {
                        this.state.showMenu
                            ? (
                                <div className="menu1">
                                    <div><input type="checkbox" /><span> MMORPG </span></div> <br />
                                    <div><input type="checkbox" /><span> Shooter</span></div><br />
                                    <div><input type="checkbox" /><span> Strategy </span></div>
                                    <div className="moba"><input type="checkbox" /><span> MOBA </span></div>
                                </div>

                            )
                            : (
                                null
                            )
                    }
                </div>

                <div className="select2">
                    <button className="buttonselect2" onClick={this.showMenu}>
                        Sort by<img src="./img/arrowdown.png" alt="" />
                    </button>

                    {
                        this.state.showMenu
                            ? (
                                <div className="menu2">
                                    <div><input type="checkbox" /><span> Relevance </span></div> <br />
                                    <div><input type="checkbox" /><span> Popularity</span></div><br />
                                    <div><input type="checkbox" /><span> Release Date </span></div>
                                    <div className="moba"><input type="checkbox" /><span> MOBA </span></div>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Select;