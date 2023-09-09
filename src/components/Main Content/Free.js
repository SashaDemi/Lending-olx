import './ItemsStyle.css'
import ImgItem from "../img/main-content/otdam-darom.png";

const Free = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img free-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Отдам даром</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Free;