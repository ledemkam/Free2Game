import Data from '../data/data.json'
import CardHorizont from './CardHorizont';
import Card from '../components/Card';
import CardImage from '../components/CardImage'

const Test = () => {

    return (
        <div>
            {Data.map((elem, i) => <CardImage
                data={elem}
                key={i} />
            )

            }
        </div>
    );
}

export default Test