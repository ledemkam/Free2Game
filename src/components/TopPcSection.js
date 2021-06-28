import React, { Component } from 'react';
import CardHorizont from './CardHorizont';
import CardImage from './CardImage';

class TopPcSection extends Component {
    state = {
        data: [],
        isLoaded: false
    }

    componentDidMount() {
        fetch('https://www.freetogame.com/api/games?platform=pc')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ data: json, isLoaded: true });
            })
    }

    render() {
        return (
            <section id="topGamesPC" className="grid2">
                {this.state.isLoaded ?
                    this.state.data.slice(0).map((ele, i) => <CardImage key={i} data={ele} />)
                    : "Loading ..."
                }
                {this.state.isLoaded ?
                    this.state.data.slice(1, 4).map((ele, i) => <CardHorizont key={i} data={ele} />)
                    : "Loading ..."
                }
            </section>
        );
    }
}

export default TopPcSection;