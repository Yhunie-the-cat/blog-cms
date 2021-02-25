import { Link } from "react-router-dom";
import woman_in_hat from "./../../images/woman_in_hat.jpg";
import "./styles/quote.scss";

export default function Quote() {
   return (
      <section id="about-bot">
         <img src={woman_in_hat} alt="woman in hat" />

         <div id="about-bot-text">
            <h2>"Be fearless, be brave, be bold, love yourself"</h2>
            <Link to="/contact">Let's connect</Link>
            <div className="underscore"></div>
         </div>
      </section>
   );
}
