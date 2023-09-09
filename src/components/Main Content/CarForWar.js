import './ItemsStyle.css'
import ImgItem from "../img/main-content/avto_dlya_zsu.png";

const CarForWar = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img car-for-war-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Авир для победы</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default CarForWar;