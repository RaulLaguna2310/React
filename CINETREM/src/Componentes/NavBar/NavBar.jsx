import {Link} from 'react-router-dom'

function NavBar() {
    return ( 
        <nav className='bg-color_amarelo2 pt-3 pb-3 rounded-br-lg'>
            <ul className='flex gap-3 ml-8 text-color_preto font-medium text-lg space-x-5'>
                <li className='hover:underline'><Link to = "/">Home</Link></li>
                <li className='hover:underline'><Link to = "filmes">Filmes</Link></li>
            </ul>
        </nav>
     );
}

export default NavBar;