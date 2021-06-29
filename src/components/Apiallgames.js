import React, { Component } from 'react';
import Card from './Card'
// import Select from './Selectmenu';
// import Select1 from './Selectmenu1';
// import Select2 from './Selectmenu2';
import '../css/Selectmenu.css';

class ApiAllgames extends Component {
    constructor() {
        super();

        this.state = {
            isToggleOn: false,
            isToggleOn1: false,
            isToggleOn2: false,
            data: [],
            dataOriginal: [],
            isChechedShooter: false
        }

        this.showMenu = this.showMenu.bind(this);
        this.showMenu1 = this.showMenu1.bind(this);
        this.showMenu2 = this.showMenu2.bind(this);

    }

    // state = {
    //          filterPlatform: [true, false, false],
    //     filterGenre: [false, false, false, false],
    //     filterSort: [false, false, false, false],
    // }
    componentDidMount() {
        fetch('https://www.freetogame.com/api/games')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, dataOriginal: json });
            })
    }

    showMenu = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
        console.log(this.state.isToggleOn)
    }

    showMenu1 = (event) => {
        this.setState(prevState => ({
            isToggleOn1: !prevState.isToggleOn1
        }))
    }

    showMenu2 = (event) => {
        this.setState(prevState => ({
            isToggleOn2: !prevState.isToggleOn2
        }))
    }

    handleShooter = () => {

        this.setState(prevState => ({
            isToggleOn1: !prevState.isToggleOn1
        }))

        this.setState({ isChechedShooter: !this.state.isChechedShooter })

        console.log(this.state.data)
        let dataShooter = [...this.state.data]
        let temp2 = dataShooter.filter(elem => {
            if (elem.genre === "Shooter") {
                console.log("Gefunden")
                return elem
            }

        })
        console.log(temp2)
        this.setState({ data: temp2 })
    }

    handleAll = () => {
        this.setState({ isChechedShooter: !this.state.isChechedShooter })
        this.setState({ data: this.state.dataOriginal })
    }

    render() {
        return (
            <div>
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
                        <button className="buttonselect1" onClick={(e) => this.showMenu1(e)}>
                            Genre/Tag<img src="./img/arrowdown.png" alt="" />
                        </button>

                        {
                            this.state.isToggleOn1
                                ? (
                                    <div className="menu1">
                                        <div><input type="checkbox" /><span> MMORPG </span></div> <br />
                                        <div><input type="checkbox" defaultChecked={this.state.isChechedShooter} onChange={(e) => this.handleShooter(e)} /><span> Shooter</span></div><br />
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
                        <button className="buttonselect2" onClick={this.showMenu2}>
                            Sort by<img src="./img/arrowdown.png" alt="" />
                        </button>

                        {
                            this.state.isToggleOn2
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
                    {
                        this.state.isChechedShooter ?
                            <div><input type="checkbox" defaultChecked={this.state.isChechedShooter} onChange={(e) => this.handleAll(e)} /><span> Shooter</span></div>
                            : null
                    }
                </div>
                <div className="apiallgames grid4">
                    {this.state.data.map((ele, i) => <Card key={i} data={ele} />)
                    }
                </div>
            </div>

        );
    }
}

export default ApiAllgames;