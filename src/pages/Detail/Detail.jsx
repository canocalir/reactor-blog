import { DiscussionEmbed } from "disqus-react";
import { ref, remove } from "firebase/database";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import EditModal from "../../components/EditModal/EditModal";
import Heading from "../../components/Heading/Heading";
import ImageBar from "../../components/ImageBar/ImageBar";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";
import { selectUser } from "../../features/user/userSlice";
import { successToast } from "../../helpers/toast";
import { database } from "../../utils/firebase";
import { BlogImage } from "./styled";

const Detail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [config, setConfig] = useState({})
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  const { id } = useParams();
  const {
    state: {
      data: {
        posts: { title, content, image, created, author },
      },
    },
  } = location;
  const removePostHandler = () => {
    remove(ref(database, "posts/" + id));
    navigate("/");
    successToast('Successfully Removed')
  };

  useEffect(() => {
    const getConfig = () => {
      setConfig({
        url: "http://localhost:3000",
        identifier: id,
        title: title,
        language: "en_US",
      })
    }
    getConfig()
  },[location])// eslint-disable-line

  return (
    <>
      <NavbarMain />
      <Heading headingText={title} />
      <div className="flex justify-center flex-wrap gap-5 flex-col items-center w-full">
        <BlogImage src={image} alt="detailImage" />
        <ImageBar author={author} created={created} />
        <p className="mr-7 ml-7 flex justify-center max-w-screen-md text-justify">
          {content}
        </p>
      </div>
      <div className="mt-5 mb-5 flex justify-center flex-wrap gap-2">
        {user?.email === author ? <>
          <div>
          <Button onClick={() => setIsModalOpen(true)} color={"warning"}>
            Edit Post
          </Button>
        </div>
        <EditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <div>
          <Button onClick={() => removePostHandler()} color={"failure"}>
            Remove Post
          </Button>
        </div>
        </> : null}
        <div>
          <Link to={"/"}>
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
      <div className="mr-20 ml-20">
      <DiscussionEmbed
        shortname="reactorblog-1"
        config={config}
      />
      </div>
      <FooterMain />
    </>
  );
};

export default Detail;
