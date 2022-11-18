import Heading from "../../components/Heading/Heading";
import CardContainer from "../../containers/CardContainer/CardContainer";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";

const Profile = () => {
  return (
    <>
      <NavbarMain />
      <Heading headingText={"Profile"} />
      
      <FooterMain />
    </>
  );
};

export default Profile;
