import { Card } from "flowbite-react";
import Gravatar from "react-gravatar";
import { useSelector } from "react-redux";
import Heading from "../../components/Heading/Heading";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";
import { selectUser } from "../../features/user/userSlice";
import { ProfilePageContainer } from "./styled";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <NavbarMain />
      <Heading headingText={"Profile"} />
      <ProfilePageContainer>
      <div className="max-w-sm">
          <Card className="text-center mb-20">
            <div className="flex justify-center">
              <Gravatar
                style={{ borderRadius: "50%" }}
                size={200}
                email={user?.email}
              />
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {user?.email}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Personal Information
            </p>
          </Card>
        </div>
        </ProfilePageContainer>
      <FooterMain />
    </>
  );
};

export default Profile;
