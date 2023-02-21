import { MainContant } from "./components/MainContent"
import { Sidebar } from "./components/Sidebar"
import "./styles/components/app.sass"


function App() {
  
  return (
    <div id='base'>
      <h1>Eudis Alves</h1>
      <Sidebar />
      <MainContant />
    </div>
  )
}

export default App
