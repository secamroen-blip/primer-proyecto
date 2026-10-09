import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'


function App() {

  const programa = "Analisis y Desarrollo de Software"
  return (
  <>
  <div className="layout">
    <Encabezado />
    <Sidebar/>
    <main className="contenido">
    <h2>Bievenido al programa de {programa}</h2>
    <Presentacion />
    <section className="tarjetas">
    <Tarjeta />
    <Tarjeta />
    </section>
    </main>
    <PiePagina />
  </div>
  </>
  )
}

export default App