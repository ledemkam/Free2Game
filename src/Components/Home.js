import AddedSection from "./AddedSection";
import TopPcSection from "./TopPcSection";

const Home = () => {
    return (
        <main>
            <section id="hero">
                <img src="./img/hero.png" alt="#" />
                <h1>Find & track the best free-to-play games!</h1>
            </section>
            <AddedSection />
            <TopPcSection />
        </main>);
}

export default Home;