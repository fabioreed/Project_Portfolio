import { useContext, useEffect } from 'react'
import { UserContext } from '../../providers/UserContext'
import { ModalContainer, ModalItSelf, TagLink } from './style'
import { HiOutlineHome } from 'react-icons/hi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaMapSigns } from 'react-icons/fa'

const Modal = () => {
  const { modal, setModal } = useContext(UserContext)

  useEffect(() => {
    const handleBeforeUnload = () => {
      setModal(false)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [setModal])

  return (
    <ModalContainer>
      <ModalItSelf>
        <div>
          <span onClick={() => setModal(!modal)}>X</span>
        </div>
        <ul>
          <TagLink to='/'>Home <HiOutlineHome /></TagLink>
          <TagLink to='/projects'>Projects<AiOutlineFundProjectionScreen /></TagLink>
          <TagLink to='/about'>About Me<FaMapSigns /></TagLink>
        </ul>
      </ModalItSelf>
    </ModalContainer>
  )
}

export default Modal