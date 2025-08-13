import { Provider } from "react-redux"
import Body from "./components/Body"
import appStore from "./utils/appStore"
import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <div className="App">
    <Provider store={appStore}>
    <Header/>
      <Body />
    </Provider>
    </div>
  )
}

export default App
