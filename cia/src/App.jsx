import Navbar from './Componets/Navbar.jsx'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Signin from './Pages/Signin.jsx'
import "./App.css"

const App = () => {
  return (
    <div>
      {/* Renders global site header on all route endpoints */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
