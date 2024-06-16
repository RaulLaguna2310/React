import { Link } from "react-router-dom"
import Footer from "../Componentes/Footer/Footer";

function Contato() {
    return ( 
        <>
            <div className="flex flex-col">
                <div>
                    <h1 className="font-bold text-color_preto text-2xl ml-10 mt-10">Entre em contato Conosco</h1>
                    <div className="flex ml-16 mt-10 bg-cover mb-28">
                        <div className="bg-color_roxo3 p-6 pr-8 rounded-lg w-auto h-full flex flex-col drop-shadow-lg">
                            <div className="w-80 mb-4">
                                <h1 className="font-semibold mb-2">Email:</h1>
                                <input
                                    className=" block w-full p-2 rounded-md ml-2 bg-color_roxo1 placeholder:text-color_branco placeholder:text-sm text-color_branco focus:outline-none"
                                    placeholder="Digite seu nome completo"
                                />
                            </div>
                            <div className="w-80 mb-4">
                                <h1 className="font-semibold mb-2">Email:</h1>
                                <input
                                    className=" block w-full p-2 rounded-md ml-2 bg-color_roxo1 placeholder:text-color_branco placeholder:text-sm text-color_branco focus:outline-none"
                                    placeholder="Digite seu email"
                                />
                            </div>
                            <div className="w-80">
                                <h1 className="font-semibold mb-2">Oque deseja nos dizer:</h1>
                                <textarea
                                    className="block w-full p-2 ml-2 bg-color_roxo1 text-white rounded-md focus:outline-none placeholder:text-color_branco placeholder:text-sm"
                                    placeholder="Qual sua mensagem"
                                ></textarea>
                            </div>
                            <div className="flex flex-row justify-center w-80 mt-6">
                                <Link to="/"><button className='w-40 text-color_branco bg-color_roxo1 rounded-lg py-2 px-4 hover:underline hover:font-semibold'>Enviar</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
     );
}
export default Contato;