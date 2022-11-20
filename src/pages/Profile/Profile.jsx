import Heading from "../../components/Heading/Heading";
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
