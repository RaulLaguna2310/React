import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header className=" bg-bgHeader text-white p-3">
            <div className="flex flex-row">
            <div>
                <h1 className="text-3xl mt-3 mb-3 ml-3 text-colorTitle font-medium tracking-widest">MoviApp</h1>
                <NavBar/>
            </div>
                <input className="w-80 h-12 mt-8 rounded-lg border-solid border-1 border-yellow-600 flex justify-start mx-5 text-black" type="text" name="search" id="searchId" placeholder="Qual filme deseja buscar"/>
            </div>
        </header>
     );
}
export default Header;