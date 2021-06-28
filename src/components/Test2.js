import Data from '../data/data.json';
//import CardHorizont from './CardHorizont';
//import Card from './Card';
import CardImage from './CardImage';

const Test = () => {
   return (
      <div>
         {Data.map((elem, i) => (
            <CardImage data={elem} key={i} />
         ))}
      </div>
   );
};

export default Test;
