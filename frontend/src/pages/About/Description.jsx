import { Link } from "react-router-dom";
import street from "./../../images/street.jpg";
import "./styles/description.scss";

export default function Description({ targetRef }) {
   return (
      <section id="about-mid-1" ref={targetRef}>
         <h2>"Sometimes the simplest things are the most profound"</h2>

         <img src={street} alt="street" />

         <div id="about-mid-1-text">
            <p>
               Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Aenean
               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
               penatibus et magnis dis parturient montes, nascetur ridiculus
               mus. Aenean commodo. Lorem ipsum dolor sit amet, consect etuer
               adipiscing elit.
               <br />
               <br />
               Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Aenean
               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
               penatibus et magnis dis parturient montes, nascetur ridiculus
               mus. Aenean commodo. Lorem ipsum dolor sit amet, consect etuer
               adipiscing elit.
            </p>

            <Link to="/contact">Let's connect</Link>
            <div className="underscore"></div>
         </div>

         <div id="about-center-line"></div>
      </section>
   );
}
