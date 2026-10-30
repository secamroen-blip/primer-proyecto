import {Link} from 'react-router-dom'

function Inicio() {
    const programa = "adso"

return (
    <section>
        <h2>bienvenido al programa {programa}</h2>
        <p>este es el dashboard d la competencia d frontend con react</p>
        <p>
            empieza a conocer <Link to="/perfil">mi perfil</Link>
            o tambien reviza las {' '}
            <Link to="/tecnologias">tecnologias</Link> q vamos a trabajar
        </p>
    </section>

    )}
    export default Inicio