import React, { Component } from 'react';
import Card from './Card'

class ApiAllgames extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('https://www.freetogame.com/api/games')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json });
            })
    }
    render() {
        return (
            <div className="apiallgames">
                {this.state.data.map((ele, i) => <Card key={i} data={ele} />)
                }
            </div>
        );
    }
}

export default ApiAllgames;