import './ItemsStyle.css'
import ImgItem from "../img/main-content/uslugi.png";

const Business = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img business-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Бизнес и услуги</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Business;