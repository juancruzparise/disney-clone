import '../styles/style.css';
//ALL MOVIES
import SpiderMan from '../image/movies/spiderman1.jpg';
import SpiderMan2 from '../image/movies/spiderman2.jpg';
import ElSorprendenteHombreAraña from '../image/movies/elsorprendentehombrearaña.jpg';
import ElSorprendenteHombreAraña2 from '../image/movies/elsorprendentehombrearaña2.jpg';
import SpiderMandeRegresoaCasa from '../image/movies/spidermanderegresoacasa.jpg';

function Novedades(){
    return(
        <div className='all-movies'>
        <p className='subtitle-p'>Novedades en Disney+</p>
        <div className='categories'>
          <div className="container">
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={SpiderMan}/>
          </div>
        </div>
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={SpiderMan2}/>
          </div>
        </div>  
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={ElSorprendenteHombreAraña}/>
          </div>
        </div>  
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={ElSorprendenteHombreAraña2}/>
          </div>
        </div>  
        <div className="item">
          <div className="item__border-movie">
            <img className="item__image" src={SpiderMandeRegresoaCasa}/>
          </div>
        </div>
      </div>
        </div>
        </div>
    );
}
export default Novedades;