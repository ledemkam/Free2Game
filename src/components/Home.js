import "../css/Home.css";
import AddedSection from "./AddedSection";
import TopPcSection from "./TopPcSection";
import TopWebSection from "./TopWebSection";


const Home = () => {
    return (
        <main>
            <section id="hero" className="homeHero">
                <img src="./img/hero.png" alt="#" />
                <h1>Find & track the best free-to-play games!</h1>
            </section>
            <AddedSection />
            <TopPcSection />
            <TopWebSection />
        </main>
    );
}

export default Home;