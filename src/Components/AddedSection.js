import React, { Component } from 'react';
import Card from './Card';

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
                {this.state.isLoaded ?
                    <Card
                        image={this.state.data[0].thumbnail}
                        title={this.state.data[0].title}
                        description={this.state.data[0].short_description}
                        // link={ }
                        platform={this.state.data[0].platform}
                        genre={this.state.data[0].genre}
                    /> : "Loading ..."
                }
                {this.state.isLoaded ?
                    <Card
                        image={this.state.data[1].thumbnail}
                        title={this.state.data[1].title}
                        description={this.state.data[1].short_description}
                        // link={ }
                        platform={this.state.data[1].platform}
                        genre={this.state.data[1].genre}
                    /> : "Loading ..."
                }
                {this.state.isLoaded ?
                    <Card
                        image={this.state.data[2].thumbnail}
                        title={this.state.data[2].title}
                        description={this.state.data[2].short_description}
                        // link={ }
                        platform={this.state.data[2].platform}
                        genre={this.state.data[2].genre}
                    /> : "Loading ..."
                }
                {this.state.isLoaded ?
                    <Card
                        image={this.state.data[3].thumbnail}
                        title={this.state.data[3].title}
                        description={this.state.data[3].short_description}
                        // link={ }
                        platform={this.state.data[3].platform}
                        genre={this.state.data[3].genre}
                    /> : "Loading ..."
                }
            </section>
        );
    }
}

export default AddedSection;