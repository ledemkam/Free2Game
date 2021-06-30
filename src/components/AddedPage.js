import React, { Component } from 'react';
import Card from './Card'
import '../css/AddedPage.css'

class AddedPage extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('https://www.freetogame.com/api/games?sort-by=release-date')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json });
            })
    }
    render() {
        return (<>
            <section id="hero" className="addPageHero">
                <img src="../img/addedPagePic.png" alt="" />
                <h1>Recently Added</h1>
            </section>
            <section id="AddedPage" className="grid4">
                {this.state.data.map((ele, i) => <Card key={i} data={ele} />)
                }
            </section>
        </>
        );
    }
}

export default AddedPage;