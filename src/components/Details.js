import '../css/Details.css';
import '../css/Button.css';
import Header from './Header';
//import Button from './Button';

const Details = () => {
   return (
      <body>
         <div className="detailsgame">
            <Header />
            <div className="detailimg"></div>
            <div>
               <h1 className="detailtitle">Title of game</h1>
               <div className="imgabout"></div>
               <h2 className="platform">Platform:</h2>
               <p className="genre">Genre</p>
            </div>
            <div className="detailsabout">
               <h2>About</h2>
               <p></p>
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
                  <p>
                     Please note this free-to-play game may or may not offer
                     optional <br /> in-game purchases.
                  </p>
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
               <h2>
                  Minimum System Requirements <br />
                  (Windows)
               </h2>
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
};

export default Details;
