import "../css/Card.css"
import Button from "./Button";
import { Link } from "react-router-dom";
const Card = (props) => {
    console.log(props)

    return (
        <figure className="card">
            <img src={props.data.thumbnail} alt="" />
            <section className="description">
                <h3>{props.data.title}</h3>
                <p>{props.data.short_description}</p>
            </section>
            <div className="readMore">
                <Link to={`/api/${props.data.id}`}><Button name="read more" /></Link>
            </div>
            <div className="category">
                {props.data.platform === "PC (Windows)" ? <img className="border" src="windows.png" alt="" /> : <img className="border" src="browser.png" alt="" />}
                <div className="border">{props.data.genre}</div>
            </div>
        </figure>
    );
}
export default Card