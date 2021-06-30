import "../css/CardHorizont.css"
import Button from "./Button";
import { Link } from "react-router-dom";
const CardHorizont = (props) => {
    console.log(props)

    return (
        <figure className="cardHorizont">
            <div
                style={{
                    backgroundImage: `url(${props.data.thumbnail})`,
                    width: "55%",
                    borderRadius: "1.5rem",
                    backgroundSize: 'cover',
                }}
            >
                <div className="number">
                    <span>{props.data.id}</span>
                </div>
            </div>
            <div>
                <section className="description">
                    <h3>{props.data.title}</h3>
                    <Link to={`/api/${props.data.id}`}><Button name="read more" /></Link>
                </section>
                <div className="category">
                    <span>{props.data.platform === "PC (Windows)" ? <img src="windows.png" alt="" /> : <img src="browser.png" alt="" />}</span>
                    <span>{props.data.genre}</span>
                </div>
            </div>

        </figure>
    );
}
export default CardHorizont