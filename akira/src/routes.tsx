import { Routes, Route } from 'react-router-dom'
import App from './pages/Home/App.tsx'
import { SobreOJogo } from './pages/SobreOJogo/SobreOJogo.tsx'
import { Contato } from './pages/Contato/Contato.tsx'
import { Minigame } from './pages/Minigame/Minigame.tsx'
import { Historia } from './pages/Historia/Historia.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'


function MainRoutes() {
    return (
        <Routes>
            <Route element={<App />} path="/" />
            <Route element={<SobreOJogo />} path="./pages/SobreOJogo" />
            <Route element={<Contato />} path="./pages/Contato" />
            <Route element={<Minigame />} path="./pages/Minigame" />
            <Route element={<Historia />} path="./pages/Historia" />
            <Route element={<NotFound />} path="*" />
        </Routes>
    )
}

export default MainRoutes;