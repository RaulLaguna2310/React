import data from '../../artigos.json'
import Carrossel from '../Componentes/Carrossel/Carrossel';
import { Link } from "react-router-dom"
import Carrossel_01 from '../Componentes/Carrossel_01/Carrossel_01';
import CardContato from '../Componentes/CardContato/CardContato';
import Footer from '../Componentes/Footer/Footer';

function Home() {
    return ( 
        <>
        <main>
                <div className="flex flex-col">
                    <div>
                        <div className='bg-color_roxo2 py-1 mt-6 rounded-r-lg'>
                            <div className='flex flex-row mt-10 ml-10'>
                                <h2 className='font-bold text-color_preto text-2xl mr-4'>Notícias</h2>
                                <Link to="noticias">
                                    <button className='text-color_branco bg-color_roxo1 rounded-lg py-2 px-4 hover:underline hover:font-semibold'>Ver Mais</button>
                                </Link>
                            </div>
                            <Carrossel />
                        </div>

                        <div className='py-1 mt-6'>
                            <div className='flex flex-row mt-10 ml-10 mb'>
                                <h2 className='font-bold text-color_preto text-2xl mr-4'>Em Cartaz</h2>
                                <Link to="filmes">
                                    <button className='text-color_branco bg-color_roxo1 rounded-lg py-2 px-4 hover:underline hover:font-semibold'>Ver Mais</button>
                                </Link>
                            </div>
                            <Carrossel_01 />
                        </div>
                        <CardContato />
                    </div>
                    <Footer />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                    {data.map((filme, index) => (
                        <div className='card mx-5 gap-3' key={index}>
                            <h1 className='text-xl font-medium mb-4'>{filme.title}</h1>
                            <img src={filme.image} alt={filme.title} className='w-80' />

                            <div className='tag flex space-x-10 mt-2 mb-4'>
                                {filme.tags.map(tag => (
                                    <span key={tag} className='colorTxt'>{tag}</span>
                                ))}
                            </div>

                            <div className='text text-black mb-7 text-justify max-w-80'>
                                {filme.text.map(text => (
                                    <span key={text} className='colorTxt'>{text}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
               
            </main>
        </>
     );
}
export default Home;

