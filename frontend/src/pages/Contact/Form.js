import { useRef } from "react";
import marble_table from "./../../images/marble_table.jpg";
import pen from "./../../images/pen.jpg";
import "./styles/form.scss";

export default function Form() {
   const nameRef = useRef(null);
   const emailRef = useRef(null);
   const subjectRef = useRef(null);
   const messageRef = useRef(null);

   const handleSubmit = (e) => {
      if (
         !emailRef.current.value.includes("@") ||
         !emailRef.current.value.includes(".")
      ) {
         alert("Wrong email format!");
      } else {
         alert("Email has been sent!");
         nameRef.current.value = "";
         emailRef.current.value = "";
         subjectRef.current.value = "";
         messageRef.current.value = "";
      }
      e.preventDefault();
   };

   return (
      <section id="contact-page">
         <img src={pen} alt="pen" />
         <img src={marble_table} alt="marble_table" />

         <div id="contact-page-text-container">
            <h2>Contact</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
               commodo ligula eget dolor. Aenean massa.
            </p>

            <form id="contact-form" onSubmit={handleSubmit}>
               <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  ref={nameRef}
                  required
               />
               <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
               />
               <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  ref={subjectRef}
                  required
               />

               <textarea
                  id="subject"
                  name="subject"
                  placeholder="Message"
                  ref={messageRef}
                  required
               ></textarea>

               <button type="submit" id="submit-button" value="Submit">
                  Send
               </button>
               <div id="submit-button-underscore"></div>
            </form>
         </div>
      </section>
   );
}
