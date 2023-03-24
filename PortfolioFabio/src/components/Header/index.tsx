import { HeaderContainer, LinkTag } from './style'

const Header = () => {

  return (
    <HeaderContainer>
        <div>
          <h3>
            Fabio<span>.dev</span>
          </h3>
        </div>
        <ul>
          <li><LinkTag to='/'>Home</LinkTag></li>
          <li><LinkTag to='/projects'>Projects</LinkTag></li>
          {/* <li><LinkTag to='/about'>About Me</LinkTag></li>
          <li><LinkTag to='/languages'>Languages</LinkTag></li>
          <li><LinkTag to='/contact'>Contact Me</LinkTag></li> */}
        </ul>
        <button>Contact</button>
        {/* <FiMenu /> */}
    </HeaderContainer>
  )
}

export default Header