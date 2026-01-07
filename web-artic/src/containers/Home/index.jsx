import './index.css'
import Sobre from './sections/Sobre'

function Home (){

    return (
    <div>
        <header className="header">

                <nav className="btnHeader">
                    <a href='#home'>Home</a>
                    <a href='#sobre'>Sobre</a>
                    <a href='#artico'>Ártico</a>
                    <a href='#antartida'>Antartida</a>
                    <a href='#contato'>Contato</a>
                </nav>
        </header>

                <section id="home" className="imgWall">
                    <img src="/imgWall.jpg" alt='' />
                </section>

                <Sobre />
    </div>
    )
}

export default Home