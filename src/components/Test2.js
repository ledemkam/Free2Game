import Data from '../data/data.json'
import Card from './Card';

const Test = () => {

    return (
        <div>
            {Data.map((elem, i) => <Card
                data={elem}
                key={i} />
            )

            }
        </div>
    );
}

export default Test