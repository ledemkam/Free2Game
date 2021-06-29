import React, { Component } from 'react';
import Button from './Button'
import Header from './Header'
import '../css/Details.css';
// import { Link } from "react-router-dom";

class DetailsDyn extends Component {
    state = {
        data: [],
        isLoaded: false
    }

    componentDidMount() {
        console.log(this.props.match.params.myId)

        let id = this.props.match.params.myId

        fetch(`https://www.freetogame.com/api/game?id=${id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoaded: true })
                console.log(this.state.data)
            })
    }
    render() {
        return (
            <body>
                {this.state.isLoaded ?
                    <div className="item">
                        <div className="detailsgame">
                            <Header />
                            <div className="detailimg">
                                <img src={this.state.data.screenshots[0].image} alt="" />
                            </div>
                            <div>
                                <h1 className="detailtitle">{this.state.data.title}</h1>
                                <div className="imgabout">
                                    <img src={this.state.data.thumbnail} alt="" />
                                </div>
                                <h2 className="platform">Platform: {this.state.data.platform}</h2>
                                <p className="genre"> {this.state.data.genre}</p>

                                <a href={this.state.data.game_url}><Button name="Play now" /></a>
                            </div>
                            <div className="detailsabout">
                                <h2>About</h2>
                                <p>{this.state.data.description}</p>
                            </div>
                        </div>
                        <div className="imgoneandtwo">
                            <div className="imgone">
                                <img src={this.state.data.screenshots[1].image} alt="" />
                            </div>
                            <div className="imgtwo">
                                <img src={this.state.data.screenshots[2].image} alt="" />
                            </div>
                        </div>
                        <div className="lastpart">
                            <div className="additional">
                                <div>
                                    <h2>Additional Information</h2>
                                    <p>Please note this free-to-play game may or may not offer optional in-game purchases.</p>
                                </div>
                                <div className="info1">
                                    <h3>Developer</h3>
                                    <p>{this.state.data.developer}</p>
                                </div>
                                <div className="info2">
                                    <h3>Publisher</h3>
                                    <p>{this.state.data.publisher}</p>
                                </div>
                                <div className="info3">
                                    <h3>Release Date</h3>
                                    <p>{this.state.data.release_date}</p>
                                </div>
                            </div>

                            <div className="system">
                                <h2>Minimum System Requirements <br />(Windows)</h2>
                                <table>
                                    <tr>
                                        <th>OS</th>
                                        <th>Processor</th>
                                    </tr>
                                    <tr>
                                        <td>{this.state.data.minimum_system_requirements.os}</td>
                                        <td>{this.state.data.minimum_system_requirements.processor}</td>
                                    </tr>
                                    <tr>
                                        <th>Memory</th>
                                        <th>Graphics</th>
                                    </tr>
                                    <tr>
                                        <td>{this.state.data.minimum_system_requirements.memory}</td>
                                        <td>{this.state.data.minimum_system_requirements.graphics}</td>
                                    </tr>
                                    <tr>
                                        <th>Storage</th>
                                        <th>Additional Notes</th>
                                    </tr>
                                    <tr>
                                        <td>{this.state.data.minimum_system_requirements.storage}</td>
                                        <td>Info</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                    </div>

                    : "Loading..."
                }

            </body>
        );
    }
}

export default DetailsDyn;