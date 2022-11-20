import { ImageBarContainer, ImageBarDetailsContainer } from "./styled";

const ImageBar = ({ created, author }) => {
  return (
    <ImageBarContainer>
      <ImageBarDetailsContainer>
        <span>Date Created </span>
        <p>{created}</p>
      </ImageBarDetailsContainer>
      <ImageBarDetailsContainer>
        <span>Author </span>
        <p>{author}</p>
      </ImageBarDetailsContainer>
    </ImageBarContainer>
  );
};

export default ImageBar;
