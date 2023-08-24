import './HeadComp.css'
import myImg from '../img/olx-logo.jpg'
const HeadComp = () => {
    return (
        <div className='main-head-box'>
            <div className='header-box'>
                    <a href='#' className='sticker-head-box'>
                        <img className='head-img-olx' src={myImg} alt="no img"/>
                    </a>
                <div className='div-div'>
                    <div className='language-head-box'> Язык I </div>
                    <div className='select-language'> Мова </div>
                    <div className='message-head-box'> Сообщения </div>
                    <div className='like-head-box'> Like </div>
                    <div className='profile-head-box'> Ваш профиль </div>
                    <div className='advertise-head-box'> Подать объявление </div>
                </div>
            </div>
        </div>
    )
}
export default HeadComp;