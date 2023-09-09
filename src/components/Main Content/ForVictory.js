import './ItemsStyle.css'
import ImgItem from "../img/main-content/militariya.png";

const ForVictory = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img for-victory-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Товары для победы</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ForVictory;