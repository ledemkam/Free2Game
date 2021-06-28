import "../css/Card.css"


const Card = (props) => {
    console.log(props)

    return (
        <figure className="card">
            <img src={props.image} alt="" />
            <section className="description">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <button></button>
            </section>
            <div className="category">
                <span>{props.platform === "PC (Windows)" ? <img src="windows.png" alt="" /> : <img src="browser.png" alt="" />}</span>
                <span>{props.genre}</span>
            </div>
        </figure>
    );
}
export default Card

// == "PC (Windows)" ?  <div>"Hallo"</div> : <div>"Welt</div>
// Web Browser