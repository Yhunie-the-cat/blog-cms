import Wrapper from "../Wrapper";
import Hero from "./Hero";
import Images from "./Images";
import FavoritePosts from "./FavoritePosts";

export default function HomePage() {
   return (
      <>
         <Wrapper>
            <Hero />
            <Images />
            <FavoritePosts />
         </Wrapper>
      </>
   );
}
