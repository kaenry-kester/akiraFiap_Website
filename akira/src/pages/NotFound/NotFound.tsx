import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import './NotFound.css'

export function NotFound() {
    return (
        <div>
            <Header />
            <main>
                <h1> Error 404: Página não encontrada</h1>
            </main>
            <Footer />
        </div>
    )
}