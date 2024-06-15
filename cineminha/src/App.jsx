import Header from "./Componentes/Header/Header";
import { Outlet } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar";
import Switch from "./Componentes/Switch/Switch";

function App() {
  return (
    <>
      <Header/>
      <NavBar/>
      <Outlet/>
    </>
  )
}
export default App;