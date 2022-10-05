import '../Banner/Banner.css';

import { Link } from 'react-router-dom';

import icon from '../../Assets/img/icon.png'

const Banner = () => {
    return (
        <div className='m-hero'>
            <div className="contaiiner">
                <div className="m-hero-top">
                    <div className="m-hero-txt">
                        <img src={icon} alt="icono de marca personal" width={28} height={28}/>
                        <h1>
                            <span className="small">Alan</span>
                            <span className="big">Naranjo</span>
                        </h1>
                        <p className="m-hero-subtitle">
                        Bebida alcohólica de sabor amargo y color amarillento, más o menos oscuro, que se obtiene por fermentación de la cebada y se aromatiza con lúpulo.

                        <Link to='/cervezas' className="m-txt-a" aria-current="page"><button className='btnB mt-4'>CERVEZAS</button></Link>
                        </p>
                    </div>
                </div>
                <div className="fadeAtScroll m-hero-bottom">
                    <div className="m-hero-img-ctn">
                        <img src="https://virtual-gallery.okeystudio.com/photo1.42abc711.webp" alt="banner"/>
                    </div>  
                </div>
            </div>
        </div>
        );
}

export default Banner;
