import Footer from "../Componentes/Footer/Footer";

function Sobre() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <h1 className="font-bold text-color_preto text-2xl ml-40 mt-10">Nos conheça melhor</h1>
                <div className="flex flex-row mt-6 justify-around">
                    <div className="bg-color_roxo3 p-6 rounded-lg w-4/12 h-full drop-shadow-lg">
                        <p className="text-wrap w-full">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rem sint velit sapiente veritatis itaque eligendi placeat aliquam provident asperiores! Possimus fugit, vitae nam molestias velit dolorem id a assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid rem sint velit sapiente veritatis itaque eligendi placeat aliquam provident asperiores! Possimus fugit, vitae nam molestias velit dolorem id a assumenda.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="eumesmo.png" className="w-80 h-auto" />
                        <p className="font-medium text-color_preto text-md'">Raul Laguna o TREM!</p>
                    </div>
                </div>
                <div className="mt-auto">
                    <Footer/>
                </div>
            </div>
        </>
    );
}
export default Sobre;