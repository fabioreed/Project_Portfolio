import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { UserProvider } from "./providers/UserContext"

export const MyRoutes = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <Projects /> } />
      </Routes>
    </UserProvider>
  )
}
