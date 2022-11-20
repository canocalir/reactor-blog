import { ref, set, push } from "firebase/database";
import {
  getDownloadURL,
  uploadBytesResumable,
  ref as sRef,
} from "firebase/storage";
import { Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";
import { addPost, selectPost } from "../../features/post/postsSlice";
import { storage, database } from "../../utils/firebase";
import { NewBlogContainer } from "./styled";

const NewBlog = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  const navigate = useNavigate();
  const initialState = {
    id: "",
    title: "",
    content: "",
    image: "",
  };

  const [file, setFile] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [post, setPost] = useState(initialState);
  const [percent, setPercent] = useState("");

  const handleImageFirebaseUpload = () => {
    
    const storageRef = sRef(storage, `/images/${String(Math.random())}`);
     uploadBytesResumable(storageRef, file)
      .then((snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          setImageURL(downloadURL);
        });
        setPercent(percent);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    
    dispatch(
      addPost({
        id: new Date().getMilliseconds(),
        title: post?.title,
        content: post?.content,
        image: imageURL,
      })
    );
  }, [post]);

  const handleImage = (e) => {
    setFile(e.target.files[0]);
    
  };

  useEffect(() => {
    handleImageFirebaseUpload()
  },[post, file])

  const createPost = (e) => {
    e.preventDefault();
    setPost(initialState);
    const postRef = ref(database, "posts/");
    const newPostRef = push(postRef);
    set(newPostRef, {
      posts,
    });
    
    setTimeout(() => {
      navigate("/dashboard");
    },1000)
  };
  
  return (
    <>
      <NavbarMain />
      <Heading headingText={"Create a Post"} />
      <NewBlogContainer>
        <form onSubmit={createPost}>
          <div id="textarea" style={{ width: "500px" }}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Post Title" />
              </div>
              <TextInput
                onChange={(e) =>
                  setPost({ ...post, [e.target.name]: e.target.value })
                }
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
              onChange={(e) =>
                setPost({ ...post, [e.target.name]: e.target.value })
              }
              name="content"
              id="comment"
              placeholder="Write an article about..."
              required={true}
              rows={4}
            />
            <button
              disabled={!file}
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full mt-8"
            >
              Create Post
            </button>
          </div>
        </form>
      </NewBlogContainer>
      <FooterMain />
    </>
  );
};

export default NewBlog;
