import './ItemsStyle.css'
import ImgItem from "../img/main-content/dom-i-sad.png";

const HouseAndGarden = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img house-garden-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Дом и сад</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default HouseAndGarden;