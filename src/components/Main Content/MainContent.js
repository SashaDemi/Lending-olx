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
                <div>
                    {/*<Business/>
                    <Rent/>
                    <Fashion/>
                    <Hobbies/>
                    <Free/>
                    <Swap/>
                    <CarForWar/>
                    <School/>
                    <ForVictory/>*/}
                </div>
            </div>
        </div>
    )
};
export default MainContent;