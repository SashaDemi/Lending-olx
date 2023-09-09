import './ItemsStyle.css'
import ImgItem from "../img/main-content/nedvizhimost.png";

const RealEstate = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img real-estate-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Недвижимость</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default RealEstate;