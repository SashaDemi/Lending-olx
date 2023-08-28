import './HeadComp.css'
import myImg from '../img/olx-logo.jpg'
import messagesLogo from '../img/message-logo.png'
import likesLogo from '../img/likes-logo.png'
import profileLogo from '../img/profile-logo.png'

const HeadComp = () => {
    return (
        <div className='main-head-box'>
            <div className='header-box'>
                <div className='sticker-head-box'>
                    <div className='img-a-wrap'>
                        <a href='/#'>
                            <img className='img-olx-head' src={myImg} alt='no img'/>
                        </a>
                    </div>
                </div>
                <div className='header-content'>
                    <a href='/#' className='language-head-box'> Язык &nbsp; &nbsp;I </a>
                    <a href='/#' className='select-language'> Мова </a>
                    <a href='/#' className='message-head-box'>
                        <img src={messagesLogo} className='logo-img' alt='no img'/>
                        Сообщения
                    </a>
                    <a href='/#' className='like-head-box'>
                        <img src={likesLogo} className='logo-img' alt='no img'/>
                    </a>
                    <a href='/#' className='profile-head-box'>
                        <img src={profileLogo} className='logo-img' alt='no img'/>
                        Ваш профиль
                    </a>
                    <a href='/#' className='advertise-head-box'> Подать объявление </a>
                </div>
            </div>
        </div>
    )
}
export default HeadComp;