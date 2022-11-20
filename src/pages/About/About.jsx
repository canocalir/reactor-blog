import { Card } from "flowbite-react";
import Heading from "../../components/Heading/Heading";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";
import { AboutPageContainer } from "./styled";
import logo from '../../assets/logo.jpg'

const About = () => {
  
  return (
    <>
      <NavbarMain />
      <Heading headingText={"About"} />
      <AboutPageContainer>
      <div className="max-w-sm">
          <Card className="mb-20" imgSrc={logo}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Reactor Blog
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            This is a great blog
            </p>
          </Card>
        </div>
      </AboutPageContainer>
      <FooterMain />
    </>
  );
};

export default About;
