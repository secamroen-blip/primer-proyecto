import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'
import perfil from './imagenes/images.jpg'
import tecnologias from './data/tecnologias'
import Inicio from './pages/Inicio'
import Perfil from './pages/perfil'
import { Route, Routes } from 'react-router-dom' 



function App() {

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
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path= "/perfil" element = {<Perfil/>}/>
      </Routes>
    </main>
    <PiePagina />
  </div>
  </>
  )
  
}

export default App