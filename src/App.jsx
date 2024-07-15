
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Front from "./pages/Front"
import MainPage from "./pages/MainPage"
import WinPage from "./pages/WinPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front></Front>}></Route>
        <Route path="/game" element={<MainPage></MainPage>}></Route>
        <Route path="/won" element={<WinPage></WinPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
