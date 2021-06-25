import Header from './Header'
import Button from './Button'
import '../Css/Allgames.css';
import React, { Component } from 'react';

class Allgames extends Component {
    state = { data: [], isLoaded: false }
    componentDidMount() {
        fetch('https://www.freetogame.com/api/games')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ data: json, isLoaded: true });
            })
    }
    render() {
        return (
            <section>
                <Header />
                {this.state.map()}
            </section>
        );
    }
}


export default Allgames;