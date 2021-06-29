import React, { Component } from 'react';
import '../css/Selectmenu.css';


class Select2 extends Component {
    constructor() {
        super();

        this.state = {
            isToggleOn: false,
        }

        this.showMenu2 = this.showMenu2.bind(this);
    }

    showMenu2(event) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div className="select2">
                <button className="buttonselect2" onClick={this.showMenu2}>
                    Sort by<img src="./img/arrowdown.png" alt="" />
                </button>

                {
                    this.state.isToggleOn
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

export default Select2;