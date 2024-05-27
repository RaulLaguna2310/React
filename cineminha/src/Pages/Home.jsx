import data from '../../artigos.json'

function Home() {
    return ( 
        <>
            <input type="text" id="buscar" placeholder="Digite aqui sua busca"/>
            {data.map((filme,index) =>(
            <div className='card' key={index}>
                    <h1>{filme.title}</h1>
                    <img src={filme.image} alt={filme.title}/>
                    <div className='tag'>
                        {filme.tags.map(tag => (
                            <span key={tag} className='text-purple-900'>{tag}</span>
                        ))}
                    </div>
                </div>
                ))}
        </>
     );
}
export default Home;

