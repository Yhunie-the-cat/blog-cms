import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.scss";

export default function Header() {
   const [isClicked, setIsClicked] = useState(false);
   const [navLinks, setNavLinks] = useState([]);
   const burgerRef = useRef(null);
   const menuRef = useRef(null);

   useEffect(() => {
      setNavLinks(Object.values(menuRef.current.children));
   }, [menuRef]);

   const handleClick = () => {
      setIsClicked((state) => !state);
      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = "";
         } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
               index / 7 + 0.5
            }s`;
         }
      });
   };

   return (
      <header id="header">
         <div
            id="burger"
            className={isClicked ? "toggle" : ""}
            onClick={handleClick}
            ref={burgerRef}
         >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
         </div>
         <nav>
            <ul ref={menuRef} className={isClicked ? "nav-active" : ""}>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/photos">Photos</NavLink>
               <NavLink to="/post">Blog</NavLink>
               <NavLink to="/contact">Contact</NavLink>
            </ul>
         </nav>
         <h1>Kate</h1>
      </header>
   );
}
