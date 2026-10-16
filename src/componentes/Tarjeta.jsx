import reactLogo from '../assets/react.svg'

function Tarjeta({ icono, titulo, descripcion, horas, destacadas }) {
    console.log({ icono, titulo, descripcion, horas, destacadas })
    return(
        <article className={destacadas ? 'tarjeta tarjeta-destacada' : 'tarjeta'}> 
            <img src={reactLogo} alt="Logo de React" />
            <span className='tarjeta-icono'>{icono}</span>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p>Horas: {horas}</p>
            {/* {destacadas && <span className='tarjeta-destacada'>Destacada</span>} */}
        </article>
    )
}

export default Tarjeta