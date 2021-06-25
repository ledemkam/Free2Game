import './Card.css'

const Card = (props) => {
    console.log(props)

    return (
        <figure className="card">
            <img src={props.data.thumbnail} alt="" />
            <h3>{props.data.title}</h3>
            <p>{props.data.short_description}</p>
            <button></button>
            <div>
                <span>{props.data.platform}</span>
                <span>{props.data.genre}</span>
            </div>
        </figure>
    );
}
export default Card