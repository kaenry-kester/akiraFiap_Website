import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Akira logo" className="logo" />
            </Link>

            <nav className="nav">
                <ul>
                    <li><Link to="/"><p>Página inicial</p></Link></li>
                    <li><Link to="../pages/SobreOJogo"><p>Sobre o jogo</p></Link></li>
                    <li><Link to="./História"><p>História</p></Link></li>
                    <li><Link to="../../pages/Gameplay"><p>Gameplay</p></Link></li>
                    <li><Link to="../../pages/Contato"><p>Contato</p></Link></li>
                    <li><Link to="../../pages/Minigame"><p>Teste suas habilidades</p></Link></li>
                </ul >
            </nav >
        </header >
    )
}