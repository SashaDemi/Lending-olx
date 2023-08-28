import './HeadComp.css'
import myImg from '../img/olx-logo.jpg'
const HeadComp = () => {
    return (
        <div className='main-head-box'>
            <div className='header-box'>
                    <a href='#' className='sticker-head-box'>
                        <img className='head-img-olx' src={myImg} alt="no img"/>
                    </a>
                <div className='header-content'>
                    <a href='#' className='language-head-box'> Язык I </a>
                    <a href='#' className='select-language'> Мова </a>
                    <a href='#' className='message-head-box'> Сообщения </a>
                    <a href='#' className='like-head-box'> Like </a>
                    <a href='#' className='profile-head-box'> Ваш профиль </a>
                    <a href='#' className='advertise-head-box'> Подать объявление </a>
                </div>
            </div>
        </div>
    )
}
export default HeadComp;