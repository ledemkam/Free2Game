import React, { Component } from 'react';
import '../css/Selectmenu.css';

class Select11 extends Component {
    constructor() {
        super();

        this.state = {
            isToggleOn: false,
        }

        this.showMenu1 = this.showMenu1.bind(this);
    }




    showMenu1(event) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }


    render() {
        return (

            <div className="select1">
                <button className="buttonselect1" onClick={this.showMenu1}>
                    Genre/Tag<img src="./img/arrowdown.png" alt="" />
                </button>

                {
                    this.state.isToggleOn
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

export default Select11;