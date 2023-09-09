import './MainContent.css'
import Help from "./Help";
import BabyWorld from "./BabyWorld";
import RealEstate from "./RealEstate";
import Zapchasty from "./Zapchasty";
import Work from "./Work";
import Animals from "./Animals";
import HouseAndGarden from "./HouseAndGarden";
import Electronic from "./Electronic";
import Business from "./Business";
import Rent from "./Rent";
import Fashion from "./Fashion";
import Hobbies from "./Hobbies";
import Free from "./Free";
import Swap from "./Swap";
import School from "./School";
import ForVictory from "./ForVictory";
import CarForWar from "./CarForWar";
import Cars from "./Cars";

const MainContent = () => {
    return (
        <div>
            <div className='head-content-box'>
                <h1>Главные рубрики</h1>
            </div>
            <div className='content-wrapper'>
                <div>
                    <Help/>
                    <BabyWorld/>
                    <RealEstate/>
                    <Cars/>
                    <Zapchasty/>
                    <Work/>
                    <Animals/>
                    <HouseAndGarden/>
                    <Electronic/>
                </div>
                <div>
                    <Business/>
                    <Rent/>
                    <Fashion/>
                    <Hobbies/>
                    <Free/>
                    <Swap/>
                    <CarForWar/>
                    <School/>
                    <ForVictory/>
                </div>
            </div>
        </div>
    )
};
export default MainContent;