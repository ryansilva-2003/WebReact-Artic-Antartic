import './Artico.css'

function Artico() {
    return (
        <section className='artico'>
            <div className='container'>
                <div className='title'>Ártico</div>
                <article className='info'>

                    <div className='textArea'>
                    <p className='texto'>O Ártico, ou Região Ártica, é geralmente definido como a região do Hemisfério Norte circunscrita pela linha onde a temperatura média do mês mais quente é inferior a 10 ℃. A linha isotérmica delimitando esta região coincide aproximadamente com a linha das árvores ártica.</p>

                    <a className='leia-mais' href='https://pt.wikipedia.org/wiki/%C3%81rtico' target='_blank' rel="noopener noreferrer">
                    Leia mais <span class="material-symbols-outlined">arrow_right_alt</span>
                    </a>
                    </div>

                    <figure className='imageArtic'>
                    <img src='/Artico.png' alt='geoMundo' />
                    </figure>

                </article>
            </div>
        </section>
    )
}

export default Artico