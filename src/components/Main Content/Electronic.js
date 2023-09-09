import './ItemsStyle.css'
import ImgItem from "../img/main-content/elektronika.png";

const Electronic = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img electronic-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Електроника</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Electronic;