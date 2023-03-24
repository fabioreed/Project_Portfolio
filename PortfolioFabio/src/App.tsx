import { MyRoutes } from "./routes"
import GlobalStyle from "./styles/globalStyles"
import Reset from "./styles/reset"

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Reset />
      <MyRoutes />
    </div>
  )
}

export default App
