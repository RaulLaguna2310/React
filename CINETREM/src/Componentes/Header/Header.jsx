import Switch from "../Switch/Switch";


function Header() {
    return ( 
        <header className=" bg-color_amarelo1 text-color_branco p-3 rounded-br-lg">
            <div className="flex flex-row items-center">
                <h1 className="text-6xl mt-3 mb-3 ml-3 text-color_branco font-medium tracking-widest">CINETREM</h1>
                <input
                    className=" block w-80 h-12 rounded-2xl justify-start mx-5 mt-3 bg-color_preto placeholder:text-color_branco placeholder:text-sm pl-10 focus:outline-none"
                    placeholder="Procure por um filme"
                />
                <div className="mt-3 ml-auto">
                    <Switch />
                </div>
            </div>
        </header>
     );
}
export default Header;