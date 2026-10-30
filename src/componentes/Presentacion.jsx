import fotoPerfil from '../imagenes/machan.jpg';
function Presentacion() {
  const nombre = 'Jhon D. Litio';
  const barrio = 'plaza sesamo';
  const correo = 'jhondlitio@gmail.com';
  const telefono = '6767676767';
  return (
    <div className="presentacion">
      <img src={fotoPerfil} alt="Jhon D. Litio" />
      <h2>Presentación</h2>
      <p>Nombre completo: {nombre}</p>
      <p>Barrio: {barrio}</p>
      <p>Correo: {correo}</p>
      <p>Teléfono: {telefono}</p>
    </div>
  )
}

export default Presentacion;