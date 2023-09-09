import './ItemsStyle.css'
import ImgItem from "../img/main-content/back_to_school.png";

const School = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img school-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Товары для школы</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default School;