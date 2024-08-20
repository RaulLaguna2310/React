import Header from "./Componentes/Header/Header";
import NavBar from "./Componentes/NavBar/NavBar";
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet/>
    </>
  )
}
export default App;