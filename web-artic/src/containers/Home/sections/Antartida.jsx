import './Antartida.css';

function Antartida() {
    return (
        <>

        <section className='parallax-3'></section>

        <section className='antartida'>
            <div className='container2'>
                <div className='tituloAntartida'>Antártida</div>

                <article className='info2'>

                    <figure className='imageAntartic'>
                        <img src='/mapa-antartida.png' alt='' />
                    </figure>

                    <p className='texto2'>Antártida ou Antártica (ver questão do nome) é o mais meridional e o segundo menor dos continentes (maior apenas que a Austrália), com uma superfície de 14 milhões de quilômetros quadrados. Rodeia o polo Sul, e por esse motivo está quase completamente coberta por enormes geleiras (glaciares), exceção feita a algumas zonas de elevado aclive nas cadeias montanhosas e à extremidade norte da península Antártica.

                    <a className='leia-mais2' href='https://pt.wikipedia.org/wiki/Ant%C3%A1rtida' target='_blank' rel="noopener noreferrer">Leia mais<span class="material-symbols-outlined">arrow_right_alt</span>
                    </a></p>

                </article>

                <h2 className='title'>Animais da Antártida</h2>

                <div className='slider'>
                    <div className='track'>
                <figure>
                    <img src='/pinguim.jpg' alt='pinguim' />
                    <figcaption>Pinguim</figcaption>
                </figure>

                <figure>
                    <img src='/foca.jpg' alt='foca' />
                    <figcaption>Foca Leopardo</figcaption>
                </figure>

                <figure>
                    <img src='elefante-marinho.jpg' alt='elefante' />
                    <figcaption>Elefante-Marinho</figcaption>
                </figure>

                <figure>
                    <img src='adelia.jpg' alt='adelia' />
                    <figcaption>Pinguim de Adélia</figcaption>
                </figure>

                <figure>
                    <img src='lula-gigante.jpg' alt='lula' />
                    <figcaption>Lula-Gigante</figcaption>
                </figure>

                </div>
                </div>

                <figure className='mapa-antartida'>
                    <img src='blood.webp' alt='blood' />

                    <figcaption><h1>Blood falls</h1><h2>O que é?</h2><p>Blood Falls (Cataratas de Sangue) é um fenômeno geológico na Antártida, onde uma água avermelhada escorre da geleira Taylor para o Lago Bonney, devido à presença de óxido de ferro (ferrugem) em uma salmoura subterrânea isolada que reage com o oxigênio ao emergir, formando um espetáculo de cor e um ecossistema extremo com microrganismos que sobrevivem sem luz solar.</p>
                    
                    <h2>Quando ocorre?</h2>
                    <p>A Blood Falls não depende de estação do ano para “aparecer” – a água vermelha escorre praticamente o ano todo – mas o fenômeno fica mais visível no verão antártico (aproximadamente novembro a fevereiro), quando a temperatura é ligeiramente mais alta e o gelo superficial derrete o suficiente para permitir que a água alcance a superfície.</p>

                    <h2>Por que esse fenômeno é exclusivo da Antártica?</h2>
                    <p>A Blood Falls é exclusiva da Antártica porque a água rica em ferro fica presa sob o gelo há milhões de anos. Sua alta salinidade impede que congele, e ao entrar em contato com o ar, o ferro oxida, deixando a água vermelha. Essa combinação de gelo, sal e ferro não ocorre em nenhum outro lugar.</p>
                    </figcaption>
                </figure>

            </div>
        </section>
        </>
    );
}

export default Antartida