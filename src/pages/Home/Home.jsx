import React from 'react'
import Heading from '../../components/Heading/Heading'
import CardContainer from '../../containers/CardContainer/CardContainer'
import NavbarMain from '../../containers/NavbarMain/NavbarMain'
import FooterMain from '../../containers/FooterMain/FooterMain'

const Home = () => {
  return (
    <>
        <NavbarMain/>
        <Heading headingText={'Reactor News'}/>
        <CardContainer/>
        <FooterMain/>
    </>
  )
}

export default Home