import Heading from "../../components/Heading/Heading"
import CardContainer from "../../containers/CardContainer/CardContainer"
import FooterMain from "../../containers/FooterMain/FooterMain"
import NavbarMain from "../../containers/NavbarMain/NavbarMain"


const About = () => {
  return (
    <>
      <NavbarMain />
      <Heading headingText={"About"} />
      
      <FooterMain />
    </>
  )
}

export default About