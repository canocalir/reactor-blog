import { Button } from "flowbite-react";
import { Link} from "react-router-dom";
import { CardContainer, CardParagraph } from "./styled";
import { CommentCount } from "disqus-react";
import { FcSms } from "react-icons/fc";
import { useEffect, useState } from "react";

const BlogCard = ({ post }) => {
  const {
    posts: { title, content, image, created, author },
  } = post;

  const [config, setConfig] = useState({})

  useEffect(() => {
   const getCount = () =>  setConfig({
    url: "https://gleaming-bunny-a87b8c.netlify.app/",
    identifier: post?.id,
    title: title
  })
  getCount()
  },[post])// eslint-disable-line

  return (
    <div className="max-w-sm">
      
      <CardContainer imgAlt="blogImage" imgSrc={image}>
      <div className="flex justify-between p-3 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">{created}</p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">{author}</p>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <CardParagraph className="font-normal text-gray-700 dark:text-gray-400">
          {content}
        </CardParagraph>
        <div className="flex items-center">
        <span className="gap-1 flex items-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
        <FcSms/>
        <CommentCount
          shortname="reactorblog-1"
          config={config}
        >0 Comments</CommentCount>
        </span>
        </div>
        <div>
          <Link state={{ data: post }} to={`/details/${post?.id}`}>
            <Button className="w-full">Read More</Button>
          </Link>
        </div>
      </CardContainer>
    </div>
  );
};

export default BlogCard;
