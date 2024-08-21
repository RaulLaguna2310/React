import { Link } from "react-router-dom";

function Filmess ({filmes = []}) {       
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    return(
        <div className="listaFilmes grid grid-cols-4 ml-20 mb-14">
            {
                filmes.map(filme => (
                    <div className="card-filme mb-12" key={filme.id}>
                        <img src={`${urlImg}${filme.poster_path}`} alt={filme.title} className="rounded-xl" />
                        <div className="flex flex-col items-start ml-5 mt-2">
                            <h1 className="font-semibold text-color_preto text-xl mr-4 w-80">{filme.title}</h1>
                            <Link to={`${filme.id}`} className="font-light text-color_roxo1 text-sm hover:underline">Saber Mais</Link>
                        </div>
                    </div>
                ))
            }
        </div>
                
    )
}
export default Filmess