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
                    <li><Link to="/sobre-o-jogo"><p>Sobre o jogo</p></Link></li>
                    <li><Link to="/historia"><p>História</p></Link></li>
                    <li><Link to="/gameplay"><p>Gameplay</p></Link></li>
                    <li><Link to="/contato"><p>Contato</p></Link></li>
                    <li><Link to="/minigame"><p>Teste suas habilidades</p></Link></li>
                </ul >
            </nav >
        </header >
    )
}