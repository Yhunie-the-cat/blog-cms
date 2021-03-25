import { useState, useEffect } from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import PhotosPage from "./pages/Photos";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import SinglePost from "./pages/SinglePost";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import sanityClient from "./client.js";

export default function App() {
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
            setData(res);
         })
         .catch((err) => console.error(err));
   }, []);

   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={HomePage} />
               <Route path="/about" component={AboutPage} />
               <Route path="/photos" component={PhotosPage} />
               <Route path="/post/:slug" component={SinglePost} />
               <Route path="/post">
                  <BlogPage data={data} />
               </Route>
               <Route path="/contact" component={ContactPage} />
               <Route component={PageNotFound} />
            </Switch>
         </BrowserRouter>
      </>
   );
}
