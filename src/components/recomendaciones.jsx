import '../styles/style.css';
//ALL MOVIES
import MoonKnight from '../image/movies/moonknight.jpg';
import DoctorStrangeMovie from '../image/movies/doctorstrange.jpg';
import Cars2 from '../image/movies/cars2.jpg';
import Cars from '../image/movies/cars.jpg';
import CapitanAmerica from '../image/movies/capitanamerica.jpg';

function Recomendaciones(){
    return(
        <div className='all-movies'>
        <p className='subtitle-p'>Recomendaciones para ti</p>
        <div className='categories'>
          <div className="container">
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={MoonKnight}/>
          </div>
        </div>
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={DoctorStrangeMovie}/>
          </div>
        </div>  
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={Cars2}/>
          </div>
        </div>  
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={Cars}/>
          </div>
        </div>  
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={CapitanAmerica}/>
          </div>
        </div>
      </div>
        </div>
        </div>
    );
}
export default Recomendaciones;