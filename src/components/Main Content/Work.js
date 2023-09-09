import './ItemsStyle.css'
import ImgItem from "../img/main-content/rabota.png";

const Work = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img work-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Работа</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Work;