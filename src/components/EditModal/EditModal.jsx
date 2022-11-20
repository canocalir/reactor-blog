import { ref, update } from "firebase/database";
import {
  getDownloadURL,
  uploadBytesResumable,
  ref as sRef,
} from "firebase/storage";
import {
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPost, selectPost } from "../../features/post/postsSlice";
import { useFetch } from "../../hooks/useFetch";
import { database, storage } from "../../utils/firebase";

const EditModal = ({ setIsModalOpen, isModalOpen }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  const navigate = useNavigate();
  const { postsList } = useFetch();
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});
  const [post, setPost] = useState({});
  const [file, setFile] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [percent, setPercent] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDataOnload = () => {
    setPost({
      id: singlePost[0]?.posts?.id,
      title: singlePost[0]?.posts?.title,
      content: singlePost[0]?.posts?.content,
      image: singlePost[0]?.posts?.image,
    });
  };

  useEffect(() => {
    setSinglePost(postsList.filter((post) => post.id === id));
    fetchDataOnload();
  }, [isModalOpen, postsList]);

  useEffect(() => {
    dispatch(
      addPost({
        ...post,
        title: post?.title,
        content: post?.content,
        image: imageURL ? imageURL : singlePost[0]?.posts?.image,
      })
    );
  }, [post, imageURL, file, singlePost]);

  useEffect(() => {
    const handleEditImage = () => {
      const storageRef = sRef(
        storage,
        `/images/${String(Math.round(Math.random() * 10000))}`
      );
      uploadBytesResumable(storageRef, file)
        .then((snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(percent);
          percent > 99 &&
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              setImageURL(downloadURL);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    handleEditImage();
  }, [post, file, imageURL]);

  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };

  const editPost = (e) => {
    e.preventDefault();
    const updatedData = {};
    updatedData[id + "/posts"] = posts;
    update(ref(database, "posts/"), updatedData);
    setTimeout(() => {
      !loading && navigate("/dashboard");
    }, 3000);
  };

  return (
    <>
      <Modal
        show={isModalOpen}
        size="md"
        popup={true}
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={editPost}>
            <div id="textarea">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Post Title" />
                </div>
                <TextInput
                  onChange={(e) => {
                    setPost({ ...post, [e.target.name]: e.target.value });
                    setLoading(false);
                  }}
                  id="title"
                  value={post?.title}
                  type="text"
                  placeholder="Enter a title..."
                  required={true}
                  className="mb-5"
                  name="title"
                />
              </div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload Featured Image
              </label>
              <input
                accept="image/*"
                onChange={handleImage}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none from-cyan-500 to-blue-500 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 mb-3 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Write an article" />
              </div>
              <Textarea
                value={post?.content}
                onChange={(e) => {
                  setPost({ ...post, [e.target.name]: e.target.value });
                  setLoading(false);
                }}
                name="content"
                id="comment"
                placeholder="Write an article about..."
                required={true}
                rows={4}
              />
              <button
                disabled={loading}
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full mt-8"
              >
                Save New Post
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
