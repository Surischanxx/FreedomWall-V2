import { Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import Inbox from "./Pages/Inbox"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import AddMessage from "./Components/AddMessage"

function App() {

  return (
    <main className="bg-[rgb(37,59,90)] h-full text-[rgb(255,242,243)] overflow-x-hidden">
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Inbox/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/create" element={<AddMessage/>}/>
          </Route>
      </Routes>
    </main>
  )
}

export default App
