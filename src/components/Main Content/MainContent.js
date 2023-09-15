import './MainContent.css'
import help from "../img/main-content/dopomoga.png"
import babyWorld from "../img/main-content/detskiy-mir.png"
import realEstate from "../img/main-content/nedvizhimost.png"
import cars from "../img/main-content/transport.png"
import spares from "../img/main-content/zapchasti-dlya-transporta.png"
import work from "../img/main-content/rabota.png"
import animals from "../img/main-content/zhivotnye.png"
import houseAndGarden from "../img/main-content/dom-i-sad.png"
import electronic from "../img/main-content/elektronika.png"
import business from "../img/main-content/uslugi.png"
import rent from "../img/main-content/arenda-prokat.png"
import fashion from "../img/main-content/moda-i-stil.png"
import hobbies from "../img/main-content/hobbi-otdyh-i-sport.png"
import free from "../img/main-content/otdam-darom.png"
import swap from "../img/main-content/obmen.png"
import carsForWar from "../img/main-content/avto_dlya_zsu.png"
import school from "../img/main-content/back_to_school.png"
import forVictory from "../img/main-content/militariya.png"
import ContentElement from "./ContentElement";

const MainContent = () => {
    let mainContentDataTop = [
        {img: help, backColor: 'rgb(255, 206, 50)', text: 'Взатмопомощь'},
        {img: babyWorld, backColor: 'rgb(58, 119, 255)', text: 'Детский мир'},
        {img: realEstate, backColor: 'rgb(35, 229, 219)', text: 'Недвижимость'},
        {img: cars, backColor: 'rgb(255, 86, 54)', text: 'Авто'},
        {img: spares, backColor: 'rgb(255, 246, 217)', text: 'Запчасти для транспорта'},
        {img: work, backColor: 'rgb(206, 221, 255)', text: 'Работа'},
        {img: animals, backColor: 'rgb(200, 248, 246)', text: 'Животные'},
        {img: houseAndGarden, backColor: 'rgb(255, 214, 201)', text: 'Дом и сад'},
        {img: electronic, backColor: 'rgb(255, 206, 50)', text: 'Електроника'},
        {img: business, backColor: 'rgb(206, 221, 255)', text: 'Бизнес и услуги'},
        {img: rent, backColor: 'rgb(200, 248, 246)', text: 'Аренда и прокат'},
        {img: fashion, backColor: 'rgb(255, 214, 201)', text: 'Мода и стиль'},
        {img: hobbies, backColor: 'rgb(255, 246, 217)', text: 'Хобби, отдых и спорт'},
        {img: free, backColor: 'rgb(58, 119, 255)', text: 'Отдам даром'},
        {img: swap, backColor: 'rgb(35, 229, 219)', text: 'Обмен'},
        {img: carsForWar, backColor: 'rgb(255, 86, 54)', text: 'Авто для победы'},
        {img: school, backColor: 'rgb(255, 246, 217)', text: 'Товары для школы'},
        {img: forVictory, backColor: 'rgb(206, 221, 255)', text: 'Товары для победы'},
    ]
    return (
        <div>
            <div className='head-content-box'>
                <h1>Главные рубрики</h1>
            </div>
            <div className='content-wrapper'>
                <div>
                    {mainContentDataTop.map(e => <ContentElement data={e}/>)}
                </div>
            </div>
        </div>
    )
};
export default MainContent;