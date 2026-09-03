import { Routes, Route } from 'react-router-dom'
import App from './pages/Home/App.tsx'
import { SobreOJogo } from './pages/SobreOJogo/SobreOJogo.tsx'
import { Contato } from './pages/Contato/Contato.tsx'
import { Minigame } from './pages/Minigame/Minigame.tsx'
import { Historia } from './pages/Historia/Historia.tsx'
import { Gameplay } from './pages/Gameplay/Gameplay.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'


function MainRoutes() {
    return (
        <Routes>
            <Route element={<App />} path="/" />
            <Route element={<SobreOJogo />} path="/sobre-o-jogo" />
            <Route element={<Contato />} path="/contato" />
            <Route element={<Minigame />} path="/minigame" />
            <Route element={<Historia />} path="/historia" />
            <Route element={<Gameplay />} path="/gameplay" />
            <Route element={<NotFound />} path="*" />
        </Routes>
    )
}

export default MainRoutes;