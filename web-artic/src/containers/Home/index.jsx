import './index.css'

function Home (){

    return (
    <div>
        <header className="header">
                <div className="logo">
                    <img src="/icon.webp" alt="logo" />
                </div>

                <div className="btnHeader">
                    <button>Home</button>
                    <button>Sobre</button>
                    <button>Ártico</button>
                    <button>Antartida</button>
                    <button>Contato</button>
                </div>
        </header>

                <div className="imgWall">
                    <img src="./imgWall.jpg" alt='img' />
                </div>
    </div>
    )
}

export default Home