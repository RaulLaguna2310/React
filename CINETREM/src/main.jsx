import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound.jsx'
import Contato from './Pages/Contato.jsx'
import Sobre from './Pages/Sobre.jsx'
import Filmes from './Pages/Filmes.jsx'
import Home from './Pages/Home.jsx'
import Favoritos from './Pages/Favoritos.jsx'
import Noticias from './Pages/Noticias.jsx'
import DetalhesFilme from './Pages/DetalhesFilme.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/> },
        {path: "filmes", element: <Filmes/>},
        {path: "filmes/:id", element: <DetalhesFilme/>},
        {path: "sobre", element: <Sobre/>},
        {path: "contato", element: <Contato/>},
        {path: "favoritos", element: <Favoritos/>},
        {path: "noticias", element: <Noticias/>},
        {path: "*", element: <PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
