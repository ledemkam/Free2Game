import "../css/Card.css"
import Button from "./Button";

const Card = (props) => {
    console.log(props)

    return (
        <figure className="card">
            <section>
                <img src={props.data.thumbnail} alt="" />
                {/* <p>{props.data.short_description}</p> */}
                <Button name="read more" />
            </section>
            <div className="category">
                <span>{props.data.platform === "PC (Windows)" ? <img src="windows.png" alt="" /> : <img src="browser.png" alt="" />}</span>
                <span>{props.data.genre}</span>
            </div>
        </figure>
    );
}
export default Card