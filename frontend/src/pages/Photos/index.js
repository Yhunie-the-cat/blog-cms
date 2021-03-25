import { useRef } from "react";
import Wrapper from "./../Wrapper";
import GalleryHeader from "./GalleryHeader";
import Gallery from "./Gallery";

export default function PhotosPage() {
   const targetRef = useRef(null);

   const handleClick = () => {
      targetRef.current.scrollIntoView();
   };

   return (
      <>
         <Wrapper>
            <GalleryHeader handleClick={handleClick} />
            <Gallery targetRef={targetRef} />
         </Wrapper>
      </>
   );
}
