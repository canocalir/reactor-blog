import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { CardContainer, CardParagraph } from "./styled";

const BlogCard = ({ post }) => {
  const {
    posts: { title, content, image },
  } = post;
  
  return (
    <div className="max-w-sm">
      <CardContainer
        imgAlt="blogImage"
        imgSrc={image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <CardParagraph className="font-normal text-gray-700 dark:text-gray-400">
          {content}
        </CardParagraph>
        <div>
          <Link state={{data: post}} to={`/details/${post?.id}`}>
            <Button>Read More</Button>
          </Link>
        </div>
      </CardContainer>
    </div>
  );
};

export default BlogCard;