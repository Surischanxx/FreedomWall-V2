import { Route, Routes } from "react-router-dom"
import { Suspense, lazy, useState } from "react"
import Loading from "./Components/Loading"
import Layout from "./Components/Layout"
import Inbox from "./Pages/Inbox"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import AddMessage from "./Components/AddMessage"
import Convo from "./Components/Convo"

const FreedomWall = lazy(()=>import("./Components/FreedomWall"))

function App() {

  const [search, setSearch] = useState('')

  return (
    <main className="bg-[rgb(37,59,90)] text-[rgb(255,242,243)] overflow-x-hidden">
      <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Inbox setSearch={setSearch}/>}>
                  <Route index element={
                    <Suspense fallback={<Loading/>}>
                        <FreedomWall search={search}/>
                    </Suspense>
                  }/>
              </Route>

              <Route path="/about" element={
                  <About/>
              }/>
              <Route path="/contact" element={
                  <Contact/>
              }/>
              <Route path="/create" element={
                  <AddMessage/>
              }/>
              <Route path="/convo/:id" element={<Convo/>}/>
          </Route>
      </Routes>
    </main>
  )
}

export default App
