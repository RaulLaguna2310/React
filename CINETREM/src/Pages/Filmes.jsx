import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Footer from "../Componentes/Footer/Footer"

function Filmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {
        fetch(`${urlBase}upcoming?${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro))
    }, [])

    return (
        <>  
        <div className="flex flex-col min-h-screen">
        <h1 className="font-bold text-color_preto text-2xl p-10">Filmes</h1>
            <div className="listaFilmes grid grid-cols-4 ml-20">
                {
                    filmes.map(filme => (
                        <div className="card-filme mb-12" key={filme.id}>
                            <img src={`${urlImg}${filme.poster_path}`} className="rounded-xl" />
                            <div className="flex flex-col items-start ml-5 mt-2">
                                <h1 className="font-semibold text-color_preto text-xl mr-4 w-80">{filme.title}</h1>
                                <Link to={`${filme.id}`} className="font-light text-color_roxo1 text-sm hover:underline">Saber Mais</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-auto">
                <Footer/>
            </div>
        </div>
        </>
    );
}
export default Filmes;