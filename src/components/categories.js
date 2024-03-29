import '../styles/style.css';
import NationalGeographic from '../image/categories/national-geographic.png';
import NationalGeographicGif from '../image/categories/national-geographic-gif.gif';

function Categories(){
    return(
        <div className='categories'>
        <div className="container">
      <div className="item">
        <div className="item__border">
          <img className="item__image" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&amp;aspectRatio=1.78&amp;format=png"/>
            <img alt="test" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_C061B00E543326DA345FBF996B4D3D76422B58A49FDEE9AD9A2664618619A8F9" />
        </div>
      </div>
      <div className="item">
        <div className="item__border">
          <img className="item__image" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png"/>
            <img alt="test" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_92FA84DF0F5D951171B41E5947716ADA382A15AE5DA37869E9D592D043F49316" />
        </div>
      </div>  
      <div className="item">
        <div className="item__border">
          <img className="item__image" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png"/>
            <img alt="test" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_B8F3C4DDB037CD1840A53BDFA0AA0504E9FDDE7781D62D28230D5C74F2B06624" />
        </div>
      </div>  
      <div className="item">
        <div className="item__border">
          <img className="item__image" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png"/>
            <img alt="test" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
        </div>
      </div>  
      <div className="item">
        <div className="item__border">
          <img className="item__image" src={NationalGeographic}/>
            <img alt="test" className="item__image hover-image" src={NationalGeographicGif} />
        </div>
      </div>
    </div>
      </div>
    );
}
export default Categories;