import '../styles/style.css';
import LogoDisney from '../image/logo.png';
import Avatar from '../image/avatar.png';


function Header() {
  return (
    <div className='navbar'>
    <div className='menu'>
    <div className='logo'>
      <img src={LogoDisney} alt='logo' className='logo-disney'/>
    </div>

    <div className='menu-tabs'>
    <div className='menu-with-icon'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="5.227 6.72 25.39 23.15">
    <path d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z" fill="#ffff"/>
    </svg>
      <a className='menu-a'>INICIO</a>
    </div>

    <div className='menu-with-icon'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6 23.9 23.37">
    <path d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z" fill="#ffff"/>
    </svg>
    <a className='menu-a'>BÚSQUEDA</a>
    </div>

    <div className='menu-with-icon'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 12 12 12">
    <path d="M22.635 16.635h-3.27v-3.27a1.365 1.365 0 0 0-2.73 0v3.27h-3.27a1.365 1.365 0 0 0 0 2.73h3.27v3.27a1.365 1.365 0 0 0 2.73 0v-3.27h3.27a1.365 1.365 0 1 0 0-2.73z" fill="#ffff"/>
    </svg>
    <a className='menu-a'>MI LISTA</a>
    </div>

    <div className='menu-with-icon'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 6.75 23.25 23.25">
    <path d="M17.625 26.028L10.44 30l1.373-8.412L6 15.631l8.033-1.228 3.592-7.653 3.592 7.653 8.033 1.228-5.813 5.957L24.81 30z" fill="#ffff"/>
    </svg>
    <a className='menu-a'>ORIGINALES</a>
    </div>

    <div className='menu-with-icon'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="5.25 6.75 29.96 22.5">
    <path d="M24.71 20.07a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m-12.262 0a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m6.173-10.31a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m0 12.262a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m-1.544-4.629a.846.846 0 1 0-1.197 1.196.846.846 0 0 0 1.197-1.196m18.06-.644c-3.33 6.913-8.165 9.928-11.635 11.24-2.57.971-4.762 1.178-5.949 1.208-.348.032-.698.053-1.052.053C10.287 29.25 5.25 24.213 5.25 18S10.287 6.75 16.5 6.75c6.214 0 11.25 5.037 11.25 11.25a11.19 11.19 0 0 1-2.493 7.054c2.832-1.612 5.844-4.382 8.138-9.143a.968.968 0 0 1 1.742.838" fill="#ffff"/>
    </svg>
    <a className='menu-a'>PELICULAS</a>
    </div>

    <div className='menu-with-icon'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="6.375 5.99987 23.19 24">
    <path d="M18.84 11.965h6.722a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10.375a4 4 0 0 1-4-4V15.965a4 4 0 0 1 4-4h6.211l-3.981-3.981a1.162 1.162 0 1 1 1.643-1.644l3.465 3.465 3.464-3.465a1.162 1.162 0 0 1 1.644 1.644l-3.982 3.981zm6.428 7.73a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436zm0 6.011a1.718 1.718 0 1 0 0-3.435 1.718 1.718 0 0 0 0 3.435z" fill="#ffff"/>
    </svg>
    <a className='menu-a'>SERIES</a>
    </div>
    </div>

    </div>
    <div className='avatar'>
      <a>Usuario</a>
      <img src={Avatar} alt="avatar" className='avatar-icon'/>
    </div>
  </div>
  );
}
export default Header;