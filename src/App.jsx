import styled from "styled-components"
import Nav from "./components/nav"
import Hero from "./components/hero"
import Marquee from "./components/marquee"
import Ourapproch from "./components/Ourapproch"
import Project from "./components/Project"
import Review from "./components/Review"
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
   <Div>
     <Nav/>
     <Hero/>
     <Marquee/>
     <Ourapproch/>
     <Project/>
     <Review/>
   </Div>
  )
}

const Div = styled.div`
  overflow: hidden;
`

export default App
