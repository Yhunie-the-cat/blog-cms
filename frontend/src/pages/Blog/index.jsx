import Wrapper from "../Wrapper";
import BlogContent from "./BlogContent";

export default function BlogPage({ data }) {
   return (
      <>
         <Wrapper>
            <BlogContent data={data} />
         </Wrapper>
      </>
   );
}
