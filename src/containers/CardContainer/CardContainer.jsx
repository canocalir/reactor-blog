import { useFetch } from "../../hooks/useFetch";
import BlogCard from "../../components/BlogCard/BlogCard";
import CardsOuterContainer from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, setLoading } from "../../features/post/postsSlice";
import Loading from "../../components/Loading/Loading";
import { useEffect } from "react";
const CardContainer = () => {
  const { postsList } = useFetch();
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const loadingHandler = () => {
    dispatch(
      setLoading({
        loading: true,
      })
    );
    setTimeout(() => {
      dispatch(
        setLoading({
          loading: false,
        })
      );
    }, 1000);
  };

  useEffect(() => {
    loadingHandler();
  }, [dispatch]);// eslint-disable-line

  return (
    <CardsOuterContainer>
      {loading?.loading ? (
        <Loading />
      ) : (
        postsList?.map((post) => (
          <div className="w-80" key={post?.id}>
            <BlogCard post={post} />
          </div>
        ))
      )}
    </CardsOuterContainer>
  );
};

export default CardContainer;
