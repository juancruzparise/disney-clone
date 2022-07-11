// import './App.css';
import './styles/style.css';
import LogoDisney from './image/logo.png';
import Avatar from './image/avatar.png';

function App() {
  return (
    <div className='disney-body'>
      <div className='navbar'>
        <div className='logo'>
          <img src={LogoDisney} alt='logo' className='logo-disney'/>
        </div>
        <div className='menu'>
          <a className='menu-a'>INICIO</a>
          <a className='menu-a'>BÚSQUEDA</a>
          <a className='menu-a'>MI LISTA</a>
          <a className='menu-a'>ORIGINALES</a>
          <a className='menu-a'>PELICULAS</a>
          <a className='menu-a'>SERIES</a>
        </div>
        <div className='avatar'>
          <a>Usuario</a>
          <img src={Avatar} alt="avatar" className='avatar-icon'/>
        </div>
      </div>
    </div>
  );
}

export default App;
