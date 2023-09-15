import '../Footer/footer.css'
import olxFooterImg from '../img/OLX-logo.png'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className="grid-container">
                <img src={olxFooterImg} alt="no img" className='olx-img'/>
            </div>
            <div className='main-text'>
                Все онлайн-объявления Украины на OLX - здесь вы найдете то, что искали! Нажав на кнопку "Подать
                объявление", вы <br/> сможете разместить объявление на любую тематику легко и быстро. <br/>
                С помощью сервиса OLX вы сможете купить или продать из рук в руки практически все, что угодно.
            </div>
            <div className='small-text'>
                Сообщества OLX.ua в социальных сетях
            </div>
        </div>
    );
};
export default Footer;