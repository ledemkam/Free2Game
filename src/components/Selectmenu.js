import React, { Component } from 'react';
import '../css/Selectmenu.css';


class Select extends Component {
    constructor() {
        super();

        this.state = {
            isToggleOn: false,
            isCheckedWindows: false
        }

        this.showMenu = this.showMenu.bind(this);
    }


    showMenu() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }


    render() {
        return (
            <div className="allselect">
                <div className="select">
                    <button className="buttonselect" onClick={this.showMenu}>
                        Platform<img src="./img/arrowdown.png" alt="" />
                    </button>
                    {
                        this.state.isToggleOn
                            ? (
                                <div className="menu">
                                    <div><input type="checkbox" /><span> All Platforms </span></div> <br />
                                    <div><input type="checkbox" defaultChecked={this.state.isCheckedWindows} onChange={(e) => this.handleWindows(e)} /><span> Windows (PC) </span></div><br />
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

export default Select;