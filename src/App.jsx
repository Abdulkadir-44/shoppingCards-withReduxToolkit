import { Routes, Route } from 'react-router-dom'
import Basket from "./pages/Basket"
import Home from "./pages/Home"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  )
}

export default App
