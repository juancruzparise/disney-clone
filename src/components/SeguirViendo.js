import '../styles/style.css';
//ALL MOVIES
import DoctorStrangeMovie from '../image/movies/doctorstrange.jpg';
import SalvajementeFamosos from '../image/movies/salvajementefamosos.jpg';
import MalcomInTheMiddle from '../image/movies/malcominthemiddle.jpg';

function SeguirViendo(){
    return(
        <div className='all-movies'>
        <p className='subtitle-p'>Recomendaciones para ti</p>
        <div className='categories'>
          <div className="container seguirviendo">
        <div className="item seguirviendoitem">
          <div className="item__border-movie">
            <img className="item__image" src={DoctorStrangeMovie}/>
          </div>
        </div>
        <div className="item seguirviendoitem">
          <div className="item__border-movie">
            <img className="item__image" src={SalvajementeFamosos}/>
          </div>
        </div>  
        <div className="item seguirviendoitem">
          <div className="item__border-movie">
            <img className="item__image" src={MalcomInTheMiddle}/>
          </div>
        </div>  
      </div>
        </div>
        </div>
    );
}
export default SeguirViendo;