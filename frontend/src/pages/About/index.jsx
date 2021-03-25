import { useRef } from "react";
import Wrapper from "../Wrapper";
import Introduction from "./Introduction";
import Description from "./Description";
import Facts from "./Facts";
import Quote from "./Quote";

export default function AboutPage() {
   const targetRef = useRef(null);

   const handleClick = () => {
      targetRef.current.scrollIntoView();
   };

   return (
      <>
         <Wrapper>
            <Introduction handleClick={handleClick} />
            <Description targetRef={targetRef} />
            <Facts />
            <Quote />
         </Wrapper>
      </>
   );
}
