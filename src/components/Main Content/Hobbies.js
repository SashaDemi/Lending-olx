import './ItemsStyle.css'
import ImgItem from "../img/main-content/hobbi-otdyh-i-sport.png";

const Hobbies = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img hobbies-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Хобби, отдых и спорт</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Hobbies;