import '../Css/Details.css';
import '../Css/Button.css';
import Header from './Header'
import Button from './Button'



const Details = () => {
    return (
        <body>
            <div className="detailsgame">
                <Header />
                <div className="detailimg">
                    Bild vom Spiel
                </div>
                <div>
                    <h1 className="detailtitle">Title of game</h1>
                    <div className="imgabout">
                        Bild vom Spiel
                </div>
                    <h2 className="platform">Platform:</h2>
                    <p className="genre">Genre</p>
                    <Button name="Play now" />
                </div>
                <div className="detailsabout">
                    <h2>About</h2>
                    <p>If you’ve been looking for a game to scratch that open-world ARPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact. The developer, known previously for Honkai Impact 3rd, take players to the world of Teyvat, a vast open-world designed for extended exploration. Players not only explore dungeons, but climb mountains, trees, and buildings to discover all kinds of secrets.
                    Of course, the main character doesn’t travel alone. Instead, players build a four-player group out of over 20 characters that can be swapped out to create the best group for any particular mission. The characters, each with different skills filling out the classic RPG types as well as distinct elemental focuses, can be obtained via gameplay or the game’s gacha mechanics – as is gear. Both characters and gear are upgraded in the game via the in depth crafting system.
                    In addition, the game offers players an adventurer system that provides them with even more to do, be it daily quests, small favors for the locals, or big continent-traveling quests. The adventurer system also rewards players for their activities with a wide variety of items.
                    Genshin Impact is available to players on PC, PlayStation 4, and mobile devices. It also features a multiplayer mode allowing up to four players to play together and cross-play across all four platforms, however, PlayStation 4 does not allow for cross-progression.
                    </p>
                </div>
            </div>
            <div className="imgoneandtwo">
                <div className="imgone"></div>
                <div className="imgtwo"></div>
            </div>

            <div className="lastpart">
                <div className="additional">
                    <div>
                        <h2>Additional Information</h2>
                        <p>Please note this free-to-play game may or may not offer optional <br /> in-game purchases.</p>
                    </div>
                    <div className="info1">
                        <h3>Developer</h3>
                        <p>Information</p>
                    </div>
                    <div className="info2">
                        <h3>Publisher</h3>
                        <p>Information</p>
                    </div>
                    <div className="info3">
                        <h3>Release Date</h3>
                        <p>Information</p>
                    </div>
                </div>

                <div className="system">
                    <h2>Minimum System Requirements <br />(Windows)</h2>
                    <table>
                        <tr>
                            <th>OS</th>
                            <th>Processor</th>
                        </tr>
                        <tr>
                            <td>Info</td>
                            <td>Info</td>
                        </tr>
                        <tr>
                            <th>Memory</th>
                            <th>Graphics</th>
                        </tr>
                        <tr>
                            <td>Info</td>
                            <td>Info</td>
                        </tr>
                        <tr>
                            <th>Storage</th>
                            <th>Additional Notes</th>
                        </tr>
                        <tr>
                            <td>Info</td>
                            <td>Info</td>
                        </tr>
                    </table>
                </div>
            </div>

        </body>

    );
}

export default Details;

