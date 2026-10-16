import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'
import perfil from './imagenes/images.jpg'


function App() {

  const programa = "Analisis y Desarrollo de Software"
  const usuario = {
  hola: '¡Hola, Sebastian!',
  nombre: 'Sebastian... si eso xd',
  correo: 'sebastian@example.com',
  rol: 'Aprendiz ADSO',
  foto: perfil,
}
  return (
    
  <>
  <div className="layout">
    <Encabezado usuario={usuario} />
    <Sidebar/>
    <main className="contenido">
    <h2>Bievenido al programa de {programa}</h2>
    <Presentacion />
    <section className="tarjetas">
    <Tarjeta 
    icono="🚀"
    titulo="React"
    descripcion="Biblioteca de JavaScript para construir interfaces de usuario"
    />
    <Tarjeta 
    icono="🌐"
    titulo="JavaScript"
    descripcion="Lenguaje de programación para el desarrollo web"
    />
    </section>
    </main>
    <PiePagina />
  </div>
  </>
  )
  
}

export default App