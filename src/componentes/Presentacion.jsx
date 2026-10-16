import fotoPerfil from '../imagenes/machan.jpg';
function Presentacion() {
  return (
    <div className="presentacion">
      <img src={fotoPerfil} alt="Jhon D. Litio" />
      <h2>Presentación</h2>
      <p>Nombre completo: Jhon D. Litio</p>
      <p>Barrio: plaza sesamo</p>
      <p>Correo: jhondlitio@gmail.com</p>
      <p>Teléfono: 6767676767</p>
    </div>
  )
}

export default Presentacion;