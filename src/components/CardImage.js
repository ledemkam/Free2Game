import "../css/CardImage.css"
import Button from "./Button";
import { Link } from "react-router-dom";
const CardHorizont = (props) => {
    console.log(props)

    return (
        <figure className="cardImage">
            <div className="ImageBig" style={{
                backgroundImage: `url(${props.data.thumbnail})`,
                height: "100%",
                borderRadius: "1.5rem",
                backgroundSize: 'cover',
                backgroundPositon: "center"
            }}
            >
                <div className="number">
                    <span>{props.data.id}</span>
                </div>
                <div className="descriptionImage">
                    <section className="description">
                        <h1>{props.data.title}</h1>
                        <Link to={`/api/${props.data.id}`}><Button name="read more" /></Link>
                    </section>
                    <div className="category">
                        <span>{props.data.platform === "PC (Windows)" ? <img src="windows.png" alt="" /> : <img src="browser.png" alt="" />}</span>
                        <span>{props.data.genre}</span>
                    </div>
                </div>
            </div>
        </figure>
    );
}
export default CardHorizont