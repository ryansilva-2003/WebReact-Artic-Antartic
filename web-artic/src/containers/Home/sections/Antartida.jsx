import './Antartida.css';

function Antartida() {
    return (
        <section className='antartida'>
            <div className='container2'>
                <div className='tituloAntartida'>Antártida</div>

                <article className='info2'>

                    <figure className='imageAntartic'>
                        <img src='/Antartida.png' alt='' />
                    </figure>

                    <p className='texto2'>Antártida ou Antártica (ver questão do nome) é o mais meridional e o segundo menor dos continentes (maior apenas que a Austrália), com uma superfície de 14 milhões de quilômetros quadrados. Rodeia o polo Sul, e por esse motivo está quase completamente coberta por enormes geleiras (glaciares), exceção feita a algumas zonas de elevado aclive nas cadeias montanhosas e à extremidade norte da península Antártica.

                    <a className='leia-mais2' href='https://pt.wikipedia.org/wiki/Ant%C3%A1rtida' target='_blank' rel="noopener noreferrer">Leia mais<span class="material-symbols-outlined">arrow_right_alt</span>
                    </a></p>

                </article>
            </div>
        </section>
    )
}

export default Antartida