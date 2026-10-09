import fotoPerfil from '../imagenes/nachelle-nocom-LWVIR87DHPY-unsplash.jpg';
function Presentacion() {
  return (
    <div className="presentacion">
      <img src={fotoPerfil} alt="Foto de Daniel Andres Narvaez Narvaez" />
      <h2>Presentación</h2>
      <p>Nombre completo: Daniel Andres Narvaez Narvaez</p>
      <p>Barrio: Villa Docente</p>
      <p>Correo: danielnarvaez@gmail.com</p>
      <p>Teléfono: 3134172721</p>
    </div>
  )
}

export default Presentacion;