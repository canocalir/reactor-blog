import { ref, remove } from "firebase/database";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams} from "react-router-dom";
import EditModal from "../../components/EditModal/EditModal";
import Heading from "../../components/Heading/Heading";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";
import { database } from "../../utils/firebase";

const Detail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location?.state);
  const {id} = useParams()
  const {
    state: {
      data: {
        posts: { title, content, image },
      },
    },
  } = location;

  const removePostHandler = () => {
    remove(ref(database,"posts/"+ id))
    navigate('/')
  }

  return (
    <>
      <NavbarMain />
      <Heading headingText={title} />
      <div style={{height: '100vh'}} className="flex justify-center flex-wrap gap-5  items-center w-full">
      <img src={image} alt="detailImage" />
      <p>{content}</p>
      </div>
      <div className="mt-2 mb-24 flex justify-center flex-wrap gap-2">
        <div>
          <Button onClick={() => setIsModalOpen(true)} color={"warning"}>Edit Post</Button>
        </div>
        <EditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <div>
          <Button onClick={() => removePostHandler()} color={"failure"}>Remove Post</Button>
        </div>
        <div>
          <Link to={"/"}>
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
      <FooterMain />
    </>
  );
};

export default Detail;
