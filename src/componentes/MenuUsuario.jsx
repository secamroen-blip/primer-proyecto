import fotoPerfil from '../imagenes/nachelle-nocom-LWVIR87DHPY-unsplash.jpg';


function MenuUsuario() {
    const nombre = 'Andres Narvaez';
    const rol = 'Estudiante ADSO';

    return(
        <div className='menu-usuario'>
            <button type = 'button' className='menu-usuario-boton'>
                <img src={fotoPerfil} alt={`Foto de ${nombre}`} className='avatar'/>
                <span className='menu-usuario-datos'>
                    <span className='menu-usuario-nombre'>{nombre}</span>
                    <span className='menu-usuario-rol'>{rol}</span>
                </span>
                <span className='flecha'>⬇️</span>
            </button>

            <ul className='menu-desplegable'>
                <li><a href="#">🙎Mi perfil</a></li>
                <li><a href="#">⚙️Configuración</a></li>
                <li className='menu-separador'></li>
                <li><a href="#" className='cerrar-sesion'>🔒Cerrar sesión</a></li>
            </ul>
        </div>
    )
}

export default MenuUsuario