import { createContext, useState } from "react"

interface IDefaultProviderProps {
  children: React.ReactNode
}

interface IFunctions {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext({} as IFunctions)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [modal, setModal] = useState(false)

  return (
    <UserContext.Provider value={{ modal, setModal }}>
      { children }
    </UserContext.Provider>
  )
}