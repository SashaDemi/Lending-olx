import './ItemsStyle.css'
import ImgItem from "../img/main-content/zapchasti-dlya-transporta.png";

const Zapchsty = () => {
    return (
        <div>
            <div className='row-block'>
                <div>
                    <div className='item-block'>
                        <a href="/#">
                            <img src={ImgItem} alt="no img" className='row-img zapchsty-color'/>
                        </a>
                    </div>
                    <a href="/#" className='href-style-text'>
                        <div className='row-block-text'>Запчасти для транспорта</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Zapchsty;