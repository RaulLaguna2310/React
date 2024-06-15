import { Link } from "react-router-dom"

function CardContato(){
    return(
        
        <div className="flex justify-center items-center mt-20 mb-20 bg-cover">
            <div className="bg-color_roxo3 p-8 rounded-lg w-auto h-full flex flex-row drop-shadow-lg">
            <h3 className='font-semibold text-color_preto text-lg text-wrap w-80 mr-12'>Está enfrentando algum problema ou quer fazer alguma reclamação?</h3>
                <Link to="contato">
                    <button className='text-color_branco bg-color_roxo1 rounded-lg py-4 px-4 hover:underline hover:font-semibold'>Entre em contato conosco.</button>
                </Link>
            </div>
        </div>
    )
}
export default CardContato