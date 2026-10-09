function Sidebar(){
    return(
        <aside className ="sidebar">
            <h3 className="sidebar-titulo">Menu</h3>
            <nav>
                <ul className="sider-menu">
                    <li><a href="#">🏠Inicio</a></li>
                    <li><a href="#">🙎Mi perfil</a></li>
                    <li><a href="#">💻Tecnologias</a></li>
                    <li><a href="#">📚Recursos</a></li>
                    <li><a href="#">📞Contacto</a></li>

                </ul>
            </nav>
            <p className="sidebar-pie"> 3312943 - ADSO</p>
        </aside>
    )
}

export default Sidebar;