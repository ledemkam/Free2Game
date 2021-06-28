import "../Css/CardImage.css"
import Button from "./Button";

const CardHorizont = (props) => {
    console.log(props)

    return (
        <figure className="cardImage">
            <div
                style={{
                    backgroundImage: `url(${props.data.thumbnail})`,
                    width: "25%",
                    height: "70vh",
                    borderRadius: "1.5rem",
                    backgroundSize: 'cover'
                }}
            >
                <div className="number">
                    <span>{props.data.id}</span>
                </div>
                <div>
                    <section className="description">
                        <h1>{props.data.title}</h1>
                        <Button name="read more" />
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