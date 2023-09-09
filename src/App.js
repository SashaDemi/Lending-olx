import './App.css';
import HeadComp from "./components/Header/HeadComp";
import Footer from "./components/Footer/footer";
import MainContent from "./components/Main Content/MainContent";

const App = () => {
    return (
        <div>
            <HeadComp/>
            <MainContent/>
            <Footer/>
        </div>
    );
};

export default App;
