import { useState } from 'react'
import data from '../../../artigos.json'
import Filmess from '../Filmess/Filmess.jsx'
import InputSearch from '../InputSearch/InputSearch'

const FilmessList = () => {
    const [searchInput, setSearchInput] = useState('')
    const [filteredFilmess, setFilteredFilmess] = useState(data)

    const handleInputChange = e =>{
        const searchTerm = e.target.value
        setSearchInput(searchTerm)

        const filteredResults = data.filter( (search) => (
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
                filteredFilmess.map((artigos, index) => <Filmess key={index} {...artigos}/>) :
                <p className='text-xl col-span-3 mt-4 text-center dark:text-black'>Não encontramos seu filme 😔</p>
            }
        </div>
        </>
    )
}
export default FilmessList