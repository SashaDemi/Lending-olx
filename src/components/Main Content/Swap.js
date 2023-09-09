import './ItemsStyle.css'
import ImgItem from "../img/main-content/obmen.png";

const Swap = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img swap-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Обмен</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Swap;