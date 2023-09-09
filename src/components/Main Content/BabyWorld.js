import './ItemsStyle.css'
import ImgItem from "../img/main-content/detskiy-mir.png";

const BabyWorld = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img baby-world-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Детский мир</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default BabyWorld;