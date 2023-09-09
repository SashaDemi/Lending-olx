import './ItemsStyle.css'
import ImgItem from "../img/main-content/moda-i-stil.png";

const Fashion = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img fashion-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Мода и стиль</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Fashion;