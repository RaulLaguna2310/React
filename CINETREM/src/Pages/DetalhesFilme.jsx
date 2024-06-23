import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Footer from "../Componentes/Footer/Footer";

function DetalhesFilme() {

    const { id } = useParams();
    const [filme, setFilme] = useState([])

    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'


    useEffect(() => {
        fetch(`${urlBase}${id}?${apiKey}`)
            .then(response => response.json())
            .then(response => setFilme(response))
            .catch(erro => console.log(erro))
    },)

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <h1 className="font-bold text-color_preto text-xl p-6">{filme.title}</h1>
                <div className="flex flex-row ml-10 ">
                    <img src={`${urlImg}${filme.backdrop_path}`} className="rounded-md w-4/12 h-auto" />
                    <p className="font-medium text-sm w-64 ml-10">{filme.overview}</p>
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default DetalhesFilme