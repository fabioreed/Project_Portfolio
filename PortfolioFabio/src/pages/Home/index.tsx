import { MainContainerHome, PictureHome, ResumeContainer, SectionnContainerHome, TechnologiesContainer } from './style'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { BsCloudArrowDownFill } from 'react-icons/bs'
import Me from '../../assets/Me.jpeg'
import Header from '../../components/Header'

const Home = () => {
  return (
    <MainContainerHome>
      <Header />
      <SectionnContainerHome>
        <div>
          <h1>Dev <span>&lt; Frontend /&gt;  </span> criando interfaces elegantes e funcionais.</h1>
          <p>Eu sou um desenvolvedor frontend apaixonado por criar interfaces elegantes e funcionais que proporcionem a melhor experiência para o usuário.</p>
          <ResumeContainer>
            <button>Download CV <BsCloudArrowDownFill /></button>
            <TechnologiesContainer>
              <div>
                <FaReact />
              </div>
              <div>
                <SiTypescript />
              </div>
              <div>
                <SiJavascript />
              </div>
              <div>
                <DiCss3 />
              </div>
              <div>
                <FaNodeJs />
              </div>
            </TechnologiesContainer>
          </ResumeContainer>
        </div>
        <PictureHome>
          <img src={Me} />
        </PictureHome>
      </SectionnContainerHome>
    </MainContainerHome>
  )
}

export default Home