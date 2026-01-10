import './Artico.css'

function Artico() {
    return (
        <section className='artico'>
            <div className='container'>
                <div className='tituloArtico'>Ártico</div>
                <article className='info'>

                    <p className='texto'>O Ártico, ou Região Ártica, é geralmente definido como a região do Hemisfério Norte circunscrita pela linha onde a temperatura média do mês mais quente é inferior a 10 ℃. A linha isotérmica delimitando esta região coincide aproximadamente com a linha das árvores ártica.

                    <a className='leia-mais' href='https://pt.wikipedia.org/wiki/%C3%81rtico' target='_blank' rel="noopener noreferrer">
                    Leia mais <span class="material-symbols-outlined">arrow_right_alt</span>
                    </a>
                    </p>

                    <figure className='imageArtic'>
                    <img src='/Artico.png' alt='' />
                    </figure>

                </article>

                <h2 className='title'>Animais do ártico</h2>

                <div className='slider'>
                    <div className='track'>

                <figure className='raposa'>
                    <img src='/raposa.webp' alt='raposa' />
                    <figcaption>Raposa</figcaption>
                </figure>

                <figure className='urso'>
                    <img src='/urso.webp' alt='urso' />
                    <figcaption>Urso Polar</figcaption>
                </figure>

                <figure className='beluga'>
                    <img src='/beluga2.png' alt='beluga' />
                    <figcaption>Beluga</figcaption>
                </figure>

                <figure className='morsa'>
                    <img src='/morsa.jpg' alt='morsa' />
                    <figcaption>Morsa</figcaption>
                </figure>

                <figure className='coruja'>
                    <img src='/corujga.webp' alt='coruja' />
                    <figcaption>Coruja</figcaption>
                </figure>
                

                {/*duplicar*/}
                <figure className='raposa'>
                    <img src='/raposa.webp' alt='raposa' />
                    <figcaption>Raposa</figcaption>
                </figure>

                <figure className='urso'>
                    <img src='/urso.webp' alt='urso' />
                    <figcaption>Urso Polar</figcaption>
                </figure>

                <figure className='beluga'>
                    <img src='/beluga2.png' alt='beluga' />
                    <figcaption>Beluga</figcaption>
                </figure>

                <figure className='morsa'>
                    <img src='/morsa.jpg' alt='morsa' />
                    <figcaption>Morsa</figcaption>
                </figure>

                <figure className='coruja'>
                    <img src='/corujga.webp' alt='coruja' />
                    <figcaption>Coruja</figcaption>
                </figure>

                    </div>
                </div>

                <figure className='mapa-artico'>
                    <figcaption>
                        <h1>Aurora Boreal<br /></h1>

                        <h2>O que é?</h2>

                        Aurora polar, Aurora boreal, ou também conhecida como luzes do norte ou luzes do sul, é um fenômeno luminoso natural no céu da Terra, observado principalmente em regiões de alta latitude.
                        
                        <h2>Quando ocorre?</h2>

                        <p>Sendo assim, o melhor momento para observar as auroras é no inverno das regiões polares, quando os dias são mais curtos, e as noites são mais longas. No Hemisfério Norte esse período vai entre o final de setembro até meados de março. A época de maior intensidade é no período da Noite Polar, quando o sol quase não chega a nascer, entre o final de novembro até janeiro. Porém é a época das grandes nevascas, o que pode frustrar o viajante.</p>
                        
                        <h2>Quais os melhores destinos para curtir a aurora boreal?</h2>

                        Os melhores destinos para curtir a aurora boreal estão próximos ao Círculo Polar Ártico, onde a atividade solar é mais intensa e o céu é mais escuro. Lugares como Tromsø, na Noruega, Abisko, na Suécia, a Lapônia na Finlândia, a Islândia, Yellowknife no Canadá e Fairbanks no Alasca estão entre os mais indicados </figcaption>

                    <img src='/artico.jpg' alt='artico' />
                </figure>

            </div>
        </section>
    )
}

export default Artico