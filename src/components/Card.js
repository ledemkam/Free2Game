import './Card.css'

const Card = (props) => {
    console.log(props)

    return (
        <figure className="card">
            <img src={props.data.thumbnail} alt="" />
            <section className="description">
                <h3>{props.data.title}</h3>
                <p>{props.data.short_description}</p>
                <button></button>
            </section>
            <div className="category">
                <span>{props.data.platform === "PC (Windows)" ? <img src="windows.png" alt="" /> : <img src="browser.png" alt="" />}</span>
                <span>{props.data.genre}</span>
            </div>
        </figure>
    );
}
export default Card

// == "PC (Windows)" ?  <div>"Hallo"</div> : <div>"Welt</div>
// Web Browser