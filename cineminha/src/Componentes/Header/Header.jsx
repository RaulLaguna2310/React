import NavBar from "../NavBar/NavBar";

function Header() {
    return ( 
        <header className="flex justify-between bg-primary-raul text-white p-4">
            <span>Olá, vesitante!</span>
            <h1>Bem-vindo ao MoviApp</h1>
            <NavBar/>
        </header>
     );
}
export default Header;