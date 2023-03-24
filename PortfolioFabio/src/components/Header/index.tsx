import { useContext } from 'react'
import { Burger, HeaderContainer, LinkTag } from './style'
import { FiMenu } from 'react-icons/fi'
import Modal from '../Modal'
import { UserContext } from '../../providers/UserContext'

const Header = () => {
  const { modal, setModal } = useContext(UserContext)

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
          <li><LinkTag to='/about'>About Me</LinkTag></li>
        </ul>
      <button className='buttonContact'>Contact</button>
      <Burger>
        <button className='buttonBurger' onClick={() => setModal(!modal)}>
          <FiMenu />
        </button>
      </Burger>

      { modal && <Modal /> }
    </HeaderContainer>
  )
}

export default Header