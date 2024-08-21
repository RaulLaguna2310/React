import { useEffect, useState } from 'react'
import Filmess from '../Filmess/Filmess.jsx'
import InputSearch from '../InputSearch/InputSearch'
import data from '../../../artigos.json'

const FilmessList = () => {
    const [searchInput, setSearchInput] = useState('')
    const [filmes, setFilmes] = useState([])
    const [filteredFilmess, setFilteredFilmess] = useState([])

    useEffect(() => {   
        const fetchFilmes = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
                const data = await response.json()
                setFilmes(data.results)
                setFilteredFilmess(data.results)
            } catch (error) {
                console.error('Erro ao buscar filmes', error)
            }
        }
        fetchFilmes()
    }, []) 

    const handleInputChange = e =>{
        const searchTerm = e.target.value
        setSearchInput(searchTerm)

        const filteredResults = filmes.filter( (search) => (
            search.title.toLowerCase().includes(searchTerm.toLowerCase())
        ))

        setFilteredFilmess(filteredResults)
    }

    return (
        <>
        <InputSearch
        type="text"
        name="searchFilme"
        id="searchFilme"
        value={searchInput}
        placeholder="Busque por um filme"
        onChange={handleInputChange}
        />

        <div className='mt-10'>
            {
                filteredFilmess.length > 0 ?
                <Filmess filmes={filteredFilmess}/> :
                <p className='text-xl col-span-3 mt-4 text-center dark:text-black'>Não encontramos seu filme 😔</p>
            }
        </div>
        </>
    )
}
export default FilmessList