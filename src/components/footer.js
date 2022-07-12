import '../styles/style.css';
import LogoDisney from '../image/logo.png';

function Footer(){
    return(
    <div className="footer">
        <div className="footer-content">
        <div className="logo-disney-footer">
        <img src={LogoDisney} alt="Logo disney" center/>
        </div>
        <div className="footer-content-text">
         <a className='etiquetas-footer'>Política de privacidad</a>
         <a className='etiquetas-footer'>Acuerdo de suscripción</a>
         <a className='etiquetas-footer'>Cancelar suscripción</a>
         <a className='etiquetas-footer'>Ayuda</a>
         <a className='etiquetas-footer'>Dispositivos compatibles</a>
         <a className='etiquetas-footer'>Acerca de Disney+</a>
         <a className='etiquetas-footer'>Publicidad personalizada</a>
            <p className='text-footer'>
              Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. 
              El servicio Disney+ es comercializado por The Walt Disney Company (Argentina) S.A., 
              Tucumán 1, Piso 4º (C1049AAA) Ciudad Autónoma de Buenos Aires, Argentina y número de 
              CUIT 30-63984459-1.
            </p>
         </div>
         <p className='copyright'>© Disney. Todos los derechos reservados.</p>
         <div className='xd'></div>
        </div>
    </div>
    );
}
export default Footer;