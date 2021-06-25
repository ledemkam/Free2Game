const Card = (props) => {
    return (
        <figure>
            <img src={props.image} alt="#" />
            <figcaption>
                <p>{props.title}</p>
                <p>{props.description}</p>
                {/* <button>{props.link}Text</button> */}
                <div>linie</div>
                <span>{props.platform}</span>
                <span>{props.genre}</span>
            </figcaption>
        </figure>
    );
}

export default Card;