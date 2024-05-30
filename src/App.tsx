
import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Signup from "./components/Signup"
import Login from "./components/Login"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
