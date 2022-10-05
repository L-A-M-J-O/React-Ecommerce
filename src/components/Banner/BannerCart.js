import '../Banner/Banner.css';

import icon from '../../Assets/img/icon.png'

const BannerCart = () => {
    return (
        <div className='m-hero'>
            <div className="contaiiner">
                <div className="m-hero-top">
                    <div className="m-hero-txt">
                        <img src={icon} alt="icono de marca personal" width={28} height={28}/>
                        <h1>
                            <span className="big">Get a beer</span>
                        </h1>
                        <p className="m-hero-subtitle">
                            Cómpra, pasa un buen rato y disfruta de una bebida fría y relajante
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default BannerCart;