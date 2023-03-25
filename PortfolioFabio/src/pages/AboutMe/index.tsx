import Header from "../../components/Header"
import { AsideCard, ContainerAboutMe, FigureContainer, Icons, MyTechnologies, SayHello } from "./style"
import Me from '../../assets/Meme.jpg'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiCsswizardry, SiJavascript, SiStyledcomponents, SiMui } from 'react-icons/si'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from "react-router-dom"

const AboutMe = () => {
  return (
    <ContainerAboutMe>
      <Header />
      <footer>
        <AsideCard>
          <FigureContainer>
            <img src={Me} />
            <div>
              <h3>Fabio Luiz</h3>
              <span>Frontend Developer React | Typescript | CSS (Mobile First) | Node</span>
            </div>
          </FigureContainer>
          <MyTechnologies>
            <div></div>
            <h2>Technologies:</h2>
            <Icons>
              <FaReact />
              <SiTypescript />
              <FaNodeJs />
              <SiJavascript />
              <SiStyledcomponents />
              <SiCsswizardry />
              <SiMui />
            </Icons>
          </MyTechnologies>
        </AsideCard>
        <article>
          <h1>About Me</h1>
          <p>My name is Fabio, I'm 28 and I live in Brazil. I'm married to my beautiful English teacher Eden, who helped me to reach level C1. 
I'm passionate about programming and I am a frontend developer who is proficient in the languages React, Typescript, Css (Mobile First), Javascript, Node.</p>
          <span><BsArrowRight /><SayHello to='https://wa.me/5583986391165' target="_blank">Say Hello</SayHello></span>
        </article>
      </footer>
    </ContainerAboutMe>
  )
}

export default AboutMe