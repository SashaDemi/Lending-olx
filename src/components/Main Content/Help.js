import './ItemsStyle.css'
import ImgItem from "../img/main-content/dopomoga.png";

const Help = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Взатмопомощь</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Help;