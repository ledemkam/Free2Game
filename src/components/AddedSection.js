import React, { Component } from 'react';
import Card from './Card';
import Button from './Button';

import {
    Link
} from "react-router-dom";

class AddedSection extends Component {
    state = {
        data: [],
        isLoaded: false
    }

    componentDidMount() {
        fetch('https://www.freetogame.com/api/games?sort-by=release-date')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ data: json, isLoaded: true });
            })
    }

    render() {
        return (
            <section id="addedGames" className="grid4" >
                <h2 style={{ color: "white" }}>Recently Added</h2>
                {this.state.isLoaded ?
                    this.state.data.slice(0, 4).map((ele, i) => <Card key={i} data={ele} />)
                    : "Loading ..."
                }
                <Link to="/Allgames"><Button name="Show more" /></Link>
            </section>
        );
    }
}

export default AddedSection;