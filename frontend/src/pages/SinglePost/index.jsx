import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";

/* fetching images

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
   return builder.image(source);
}

*/

export default function SinglePost() {
   const [post, setPost] = useState(null);

   const { slug } = useParams();

   useEffect(() => {
      sanityClient
         .fetch(
            `*[slug.current == "${slug}"]{
         title,
         _id,
         slug,
         mainImage{
            asset->{
               _id,
               url
            }
         },
         body,
         "name": author->name,
         "authorImage": author->image
      }`
         )
         .then((res) => {
            console.log(res);
            setPost(res[0]);
         })
         .catch((err) => console.error(err));
   }, [slug]);

   if (!post) return <h1>Loading...</h1>;

   return (
      <main id="post-page">
         <Link to="/post">
            <h4 className="back-button">Back</h4>
         </Link>
         <h1>{post.title}</h1>
         <br />
         <br />
         <div id="post-page-text-content">
            <BlockContent
               blocks={post.body}
               projectId="7ybga5i6"
               dataset="production"
            />
         </div>
         <div id="post-page-wrapper">
            <p>{post.name}</p>
         </div>
      </main>
   );
}
