import './App.css'
import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import CursorTrails from '../../components/CursorTrail/CursorTrails.tsx'

export default function App() {
  return (
    <div>
      <CursorTrails />
      <Header />
      <h1> Hello World!</h1>
      <Footer />
    </div>
  )
}