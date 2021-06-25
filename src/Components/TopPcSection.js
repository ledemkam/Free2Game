import React, { Component } from 'react';
import Card from './Card';

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
                    <Card
                        image={this.state.data[0].thumbnail}
                        title={this.state.data[0].title}
                        // link={ }
                        platform={this.state.data[0].platform}
                        genre={this.state.data[0].genre}
                    /> : "Loading ..."
                }
                {this.state.isLoaded ?
                    <Card
                        image={this.state.data[1].thumbnail}
                        title={this.state.data[1].title}
                        // link={ }
                        platform={this.state.data[1].platform}
                        genre={this.state.data[1].genre}
                    /> : "Loading ..."
                }
                {this.state.isLoaded ?
                    <Card
                        image={this.state.data[2].thumbnail}
                        title={this.state.data[2].title}
                        // link={ }
                        platform={this.state.data[2].platform}
                        genre={this.state.data[2].genre}
                    /> : "Loading ..."
                }
                {this.state.isLoaded ?
                    <Card
                        image={this.state.data[3].thumbnail}
                        title={this.state.data[3].title}
                        // link={ }
                        platform={this.state.data[3].platform}
                        genre={this.state.data[3].genre}
                    /> : "Loading ..."
                }
            </section>
        );
    }
}

export default TopPcSection;