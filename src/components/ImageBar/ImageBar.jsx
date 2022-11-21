import { FcCalendar, FcManager } from "react-icons/fc";
import { ImageBarContainer, ImageBarDetailsContainer } from "./styled";

const ImageBar = ({ created, author }) => {
  return (
    <ImageBarContainer>
      <ImageBarDetailsContainer>
        <span className="flex items-center gap-1"><FcCalendar />Date Created</span>
        <p>
          {created}
        </p>
      </ImageBarDetailsContainer>
      <ImageBarDetailsContainer>
        <span className="flex items-center gap-1">
          <FcManager /> Author{" "}
        </span>
        <p>{author}</p>
      </ImageBarDetailsContainer>
    </ImageBarContainer>
  );
};

export default ImageBar;
