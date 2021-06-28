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
            </div>
        );
    }
}

class Select1 extends Component {
    constructor() {
        super();

        this.state = {
            showMenu1: false,
        }

        this.showMenu1 = this.showMenu1.bind(this);
    }

    showMenu1(event) {
        event.preventDefault();

        this.setState({
            showMenu1: true,
        });
    }

    render() {
        return (

            <div className="select1">
                <button className="buttonselect1" onClick={this.showMenu1}>
                    Genre/Tag<img src="./img/arrowdown.png" alt="" />
                </button>

                {
                    this.state.showMenu1
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

        );
    }
}

class Select2 extends Component {
    constructor() {
        super();

        this.state = {
            showMenu2: false,
        }

        this.showMenu2 = this.showMenu2.bind(this);
    }

    showMenu2(event) {
        event.preventDefault();

        this.setState({
            showMenu2: true,
        });
    }

    render() {
        return (
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
        );
    }
}

export default Select;