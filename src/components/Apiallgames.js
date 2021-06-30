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
            isLoaded: false,
            platform: [{ feld: "All", isChecked: false }, { feld: "PC (Windows)", isChecked: false }, { feld: "Web Browser", isChecked: false }],
            genre: [{ feld: "MMORPG", isChecked: false }, { feld: "Shooter", isChecked: false }, { feld: "Strategy", isChecked: false }, { feld: "MOBA", isChecked: false }],
            sort: [{ feld: "relevance", isChecked: false }, { feld: "popularity", isChecked: false }, { feld: "release-date", isChecked: false }, { feld: "alphabetical", isChecked: false }]
        }

        this.showMenu = this.showMenu.bind(this);
        this.showMenu1 = this.showMenu1.bind(this);
        this.showMenu2 = this.showMenu2.bind(this);

    }


    componentDidMount() {
        fetch('https://www.freetogame.com/api/games')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, dataOriginal: json, isLoaded: true });
            })
    }

    loadApi = (sorting) => {
        fetch(`https://www.freetogame.com/api/games?sort-by=${sorting}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, dataOriginal: json, isLoaded: true });
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

    // Platform wurde zurückgesetzt

    handleAllPlatform = (item) => {
        let platformupdate = this.state.platform
        platformupdate[item].isChecked = !this.state.platform[item].isChecked
        console.log(platformupdate)
        this.setState({ platform: platformupdate })
        this.setState({ data: this.state.dataOriginal })
    }
    // Genre wurde zurückgesetzt
    handleAllGenre = (item) => {
        let genreUpdate = this.state.genre
        genreUpdate[item].isChecked = !this.state.genre[item].isChecked
        console.log(genreUpdate)
        this.setState({ genre: genreUpdate })
        this.setState({ data: this.state.dataOriginal })
        console.log(this.state.platform)
    }
    // Sort wurde zurückgesetzt
    handleAllSort = (item) => {
        let sortUpdate = this.state.sort
        sortUpdate[item].isChecked = !this.state.sort[item].isChecked
        console.log(sortUpdate)
        this.setState({ sort: sortUpdate })
        this.setState({ data: this.state.dataOriginal })
        console.log(this.state.sort)
        this.loadApi('relevance')
    }

    // Platform wurde gewählt
    handlePlatform = (item) => {

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))

        let platformupdate = this.state.platform
        platformupdate[item].isChecked = !this.state.platform.isChecked

        this.setState({ platform: platformupdate })
        console.log(this.state.platform)
        this.handleFilter()
    }
    // Genre wurde gewählt
    handleGenre = (item) => {

        this.setState(prevState => ({
            isToggleOn1: !prevState.isToggleOn1
        }))

        let genreUpdate = this.state.genre
        genreUpdate[item].isChecked = !this.state.genre.isChecked

        this.setState({ genre: genreUpdate })
        console.log(this.state.genre)
        this.handleFilterGenre()
    }

    // Filter für Platform
    handleFilter = () => {
        let activePlatforms = this.state.platform.map(pl => pl.isChecked ? pl.feld : null
            // if (pl.isChecked) {
            //     return pl.feld
            // } 
        )

        let dataShooter = [...this.state.data]
        let temp2 = dataShooter.filter(elem => activePlatforms.includes(elem.platform) ? elem : null
            // if (activePlatforms.includes(elem.platform)) {
            //     console.log("Gefunden Platform")
            //     return elem
            // }

        )
        console.log(temp2)
        this.setState({ data: temp2 })
    }
    // Filter für Genre
    handleFilterGenre = () => {
        let activeGenres = this.state.genre.map(pl => pl.isChecked ? pl.feld : null
            // if (pl.isChecked) {
            //     return pl.feld
            // }
        )
        let dataShooter = [...this.state.data]
        let temp2 = dataShooter.filter(elem => activeGenres.includes(elem.genre) ? elem : null
            // if (activeGenres.includes(elem.genre)) {
            //     console.log("Gefunden Genre")
            //     return elem
            // }
        )
        console.log(temp2)
        this.setState({ data: temp2 })
    }

    //Filter für Sort 
    handleSort = (sort, item) => {
        this.loadApi(sort)
        console.log(this.state.data)
        this.setState(prevState => ({
            isToggleOn2: !prevState.isToggleOn2
        }))


        let sortUpdate = this.state.sort
        sortUpdate[item].isChecked = !this.state.sort.isChecked
        console.log(this.state.sort)

    }

    render() {
        return (
            <div>
                <div class="filter">

                    <div className="allselect  grid4">
                        <div className="select">
                            <button className="buttonselect" onClick={this.showMenu}>
                                Platform<img src="./img/arrowdown.png" alt="" />
                            </button>
                            {
                                this.state.isToggleOn
                                    ? (
                                        <div className="menu">
                                            {/* <div><input type="checkbox" defaultChecked={this.state.platform[0].isChecked} onChange={(e) => this.handlePlatform(0)} /><span> All Platforms </span></div> <br /> */}
                                            <div><input type="checkbox" defaultChecked={this.state.platform[1].isChecked} onChange={(e) => this.handlePlatform(1)} /><span> Windows (PC) </span></div><br />
                                            <div><input type="checkbox" defaultChecked={this.state.platform[2].isChecked} onChange={(e) => this.handlePlatform(2)} /><span> Browser (Web) </span></div>
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
                                            <div><input type="checkbox" defaultChecked={this.state.genre[0].isChecked} onChange={(e) => this.handleGenre(0)} /><span> MMORPG </span></div> <br />
                                            <div><input type="checkbox" defaultChecked={this.state.genre[1].isChecked} onChange={(e) => this.handleGenre(1)} /><span> Shooter</span></div><br />
                                            <div><input type="checkbox" defaultChecked={this.state.genre[2].isChecked} onChange={(e) => this.handleGenre(2)} /><span> Strategy </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.genre[3].isChecked} onChange={(e) => this.handleGenre(3)} /><span> MOBA </span></div>
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
                                            <div><input type="checkbox" defaultChecked={this.state.sort[0].isChecked} onChange={(e) => this.handleSort('relevance', 0)} /><span> Relevance </span></div> <br />
                                            <div><input type="checkbox" defaultChecked={this.state.sort[1].isChecked} onChange={(e) => this.handleSort('popularity', 1)} /><span> Popularity</span></div><br />
                                            <div><input type="checkbox" defaultChecked={this.state.sort[2].isChecked} onChange={(e) => this.handleSort('release-date', 2)} /><span> Release Date </span></div>
                                            <div className="moba"><input type="checkbox" defaultChecked={this.state.sort[3].isChecked} onChange={(e) => this.handleSort('alphabetical', 3)} /><span> Alphabetical </span></div>
                                        </div>
                                    )
                                    : (
                                        null
                                    )
                            }
                        </div>
                    </div>
                    <div className="flex">
                        {
                            this.state.platform[1].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.platform[1].isChecked} onChange={(e) => this.handleAllPlatform(1)} /><span> Windows (PC) </span></div>
                                : null
                        }
                        {
                            this.state.platform[2].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.platform[2].isChecked} onChange={(e) => this.handleAllPlatform(2)} /><span> Browser (Web) </span></div>
                                : null
                        }
                        {
                            this.state.genre[0].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[0].isChecked} onChange={(e) => this.handleAllGenre(0)} /><span> MMORPG</span></div>
                                : null
                        }
                        {
                            this.state.genre[1].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[1].isChecked} onChange={(e) => this.handleAllGenre(1)} /><span> Shooter</span></div>
                                : null

                        }
                        {
                            this.state.genre[2].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[2].isChecked} onChange={(e) => this.handleAllGenre(2)} /><span> Strategy </span></div>
                                : null
                        }
                        {
                            this.state.genre[3].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.genre[3].isChecked} onChange={(e) => this.handleAllGenre(3)} /><span> MOBA </span></div>
                                : null
                        }
                        {
                            this.state.sort[0].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.sort[0].isChecked} onChange={(e) => this.handleAllSort(0)} /><span> Relevance </span></div>
                                : null
                        }
                        {
                            this.state.sort[1].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.sort[1].isChecked} onChange={(e) => this.handleAllSort(1)} /><span> Popularity</span></div>
                                : null
                        }
                        {
                            this.state.sort[2].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.sort[2].isChecked} onChange={(e) => this.handleAllSort(2)} /><span> Release Date </span></div>
                                : null
                        }
                        {
                            this.state.sort[3].isChecked ?
                                <div className="isChecked"><input type="checkbox" defaultChecked={this.state.sort[3].isChecked} onChange={(e) => this.handleAllSort(3)} /><span> Alphabetical </span></div>
                                : null
                        }
                    </div>
                </div>

                <div className="apiallgames grid4">
                    {this.state.isLoaded ?

                        this.state.data.map((ele, i) => <Card key={i} data={ele} />)
                        : "Loading ..."
                    }
                </div>

            </div>

        );
    }
}

export default ApiAllgames;