import './App.css'
import { Header } from '../../components/Header/header.tsx'
import { Footer } from '../../components/Footer/footer.tsx'
import CursorTrails from '../../components/CursorTrail/CursorTrails.tsx'
import image from '../../assets/img/image.png'
import symbol from '../../assets/img/symbol.png'

export default function App() {
  return (
    <div>
      <CursorTrails />
      <Header />
      <span>
        <h1 className="phrase"> <em>"Meus passos já sabem o caminho, <br />e todos eles me levam de volta para casa..."</em></h1>
      </span>

      <section className="imageSection">
        <img src={symbol} alt="Símbolo do jogo" className="symbol" />
        <img src={image} alt="Imagem do jogo" className="image" />
        <img src={symbol} alt="Símbolo do jogo" className="symbol" />
      </section>
      <h2>Enfim em casa, mas com assuntos à resolver</h2>
      <h2> Resgatando aquilo que um dia, pertenceu à sua família </h2>
      <Footer />
    </div>
  )
}