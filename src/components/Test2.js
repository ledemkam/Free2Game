import Data from '../data/data.json';
//import CardHorizont from './CardHorizont';
//import Card from './Card';
// import CardImage from './CardImage';
// import CardId from './CardId'

// const Test = () => {
//    return (
//       <div>
//          {Data.map((elem, i) => (
//             <CardId data={elem} key={i} />
//          ))}
//       </div>
//    );
// };

// export default Test;

import React, { Component } from 'react';
import Card from './Card';
import CardId from './CardId';

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
               this.state.data.slice(0, 4).map((ele, i) => <CardId key={i} data={ele} />)
               : "Loading ..."
            }
         </section>
      );
   }
}

export default AddedSection;