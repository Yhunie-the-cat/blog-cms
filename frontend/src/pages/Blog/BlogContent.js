import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import woman_in_sunglasses from "./../../images/woman_in_sunglasses.jpg";
import "./styles/blogcontent.scss";

import sanityClient from "../../client.js";

export default function BlogContent() {
   const [data, setData] = useState(null);

   useEffect(() => {
      sanityClient
         .fetch(
            `*[_type=="post"]{
   title,
   slug,
   mainImage{
      asset->{
         _id,
         url
      },
      alt
   }
}`
         )
         .then((res) => {
            console.log(res);
            setData(res);
         })
         .catch((err) => console.error(err));
   }, []);

   return (
      <section id="blog-mid">
         <div id="blog-mid-text-content">
            <img src={woman_in_sunglasses} alt="woman in sunglasses" />

            <div>
               <h2>The blog</h2>
               <p>
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                  nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit
                  libero, sodales nec, volutpat a, suscipit non, turpis.
                  Curabitur ligula sapien, tincidunt non. Lorem ipsum dolor sit
                  amet, consectetuer adi piscing elit. Aenean commodo ligula
                  eget.
               </p>
               <div id="blog-underscore"></div>
            </div>
         </div>

         <div id="blog-mid-list">
            {data &&
               data.map((post, index) => {
                  return (
                     <div key={index}>
                        <img
                           src={post.mainImage.asset.url}
                           style={{ objectFit: "cover" }}
                           alt={post.slug.current}
                        />
                        <Link
                           to={`/post/${post.slug.current}`}
                           key={post.slug.current}
                        >
                           {post.title}
                        </Link>
                     </div>
                  );
               })}
         </div>
      </section>
   );
}
