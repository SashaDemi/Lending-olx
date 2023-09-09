import './ItemsStyle.css'
import ImgItem from "../img/main-content/zhivotnye.png";

const Animals = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img animals-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Животные</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Animals;