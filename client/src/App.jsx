import { Outlet } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <About/>
      <Footer />
    </>
  )
}

export default App
