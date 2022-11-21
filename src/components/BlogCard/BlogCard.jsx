import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { CardContainer, CardParagraph } from "./styled";
import { CommentCount } from "disqus-react";
import { FcSms, FcCalendar, FcManager, FcShare } from "react-icons/fc";

const BlogCard = ({ post }) => {
  const {
    posts: { title, content, image, created, author },
  } = post;

  const disqusConfig = {
    url: "https://gleaming-bunny-a87b8c.netlify.app/",
    identifier: post?.id,
    title: title,
  };
  const fullURL = `emailto:${author}?subject=sharing link\n&body=I am sharing a link:${disqusConfig?.url}details/${post?.id}}`;
  return (
    <div className="max-w-sm relative">
      <div className="flex items-center absolute right-0">
        <span className="gap-1 flex items-center bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          <FcSms />
          <CommentCount shortname="reactorblog-1" config={disqusConfig}>
            0 Comments
          </CommentCount>
        </span>
      </div>
      <div className="flex items-center absolute left-2 top-2 cursor-pointer">
        <a href={fullURL}>
          <FcShare size={"1.5rem"} />
        </a>
      </div>
      <CardContainer imgAlt="blogImage" imgSrc={image}>
        <div className="flex w-full justify-between bg-blue-100 text-blue-800 text-xs font-semibold p-1 rounded dark:bg-blue-200 dark:text-blue-800">
          <p className="text-sm flex items-center gap-1 text-gray-500 truncate dark:text-gray-400">
            <FcCalendar />
            {created}
          </p>
          <p className="text-sm flex items-center gap-0 text-gray-500 truncate dark:text-gray-400">
            <FcManager />
            {author}
          </p>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <CardParagraph className="font-normal text-gray-700 dark:text-gray-400">
          {content}
        </CardParagraph>
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
