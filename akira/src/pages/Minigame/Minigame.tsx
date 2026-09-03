import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import './Minigame.css'
import BackgroundWood from '../../assets/img/background_Wood.png'

export function Minigame() {
    return (
        <div>
            <Header />
            <main>
                <h1> Minigame</h1>
                <img src={BackgroundWood} alt="Minigame" className="MinigameImage" />
            </main>
            <Footer />
        </div>
    )
}