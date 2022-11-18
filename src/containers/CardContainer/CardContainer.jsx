import { useFetch } from "../../hooks/useFetch"
import BlogCard from '../../components/BlogCard/BlogCard'
import CardsOuterContainer from "./styled"
const CardContainer = () => {

  const {postsList} = useFetch()
  console.log(postsList)
  return (
    <CardsOuterContainer>
    {postsList.map((post) => (
      <div className="w-80" key={post?.id}>
      <BlogCard post={post}/>
      </div>
    ))}
    </CardsOuterContainer>
  )
}

export default CardContainer