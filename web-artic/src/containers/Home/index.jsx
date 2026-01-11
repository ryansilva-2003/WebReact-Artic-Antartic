import './index.css'
import Sobre from './sections/Sobre'
import Artico from './sections/Artico'
import Antartida from './sections/Antartida'
import Footer from './sections/Footer'

function Home (){

    return (
    <div>
        <header className="header">

                <nav className="btnHeader">
                    <a href='#home'>Home</a>
                    <a href='#sobre'>Sobre</a>
                    <a href='#artico'>Artico</a>
                    <a href='#antartida'>Antartida</a>
                    <a href='#contato'>Contato</a>
                </nav>
        </header>

                <section id="home" className="parallax-1">
                    <h1>Ártico</h1><h1 className='h1-2'>Antártida</h1>
                </section>

                <Sobre />
                <Artico />
                <Antartida />
                <Footer />
    </div>
    )
}

export default Home