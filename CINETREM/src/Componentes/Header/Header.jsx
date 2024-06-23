import { ImSearch } from "react-icons/im";

function Header() {
    return (
        <header className=" bg-color_amarelo1 text-color_branco p-3 rounded-br-lg">
            <div className="flex flex-row items-center">
                <h1 className="text-6xl py-3 ml-3 text-color_branco font-medium tracking-widest">CINETREM</h1>
                <div className="relative flex items-center mx-5 mt-3">
                    <ImSearch className="absolute left-4 text-color_branco" />
                    <input
                        className="block w-80 h-12 rounded-2xl pl-12 bg-color_preto placeholder:text-color_branco placeholder:text-sm focus:outline-none"
                        placeholder="Procure por um filme"
                    />
                </div>
            </div>
        </header>
    );
}
export default Header;