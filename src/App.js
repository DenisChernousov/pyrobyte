import './assets/style/Reset.css';
import './assets/style/App.css';

import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Delivery from "./components/Delivery/Delivery";
import Line from "./components/Line/Line";
import Parthners from "./components/Parthners/Parthners";
import Since from "./components/Since/Since";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                <Header/>
                <Main/>
                <Delivery/>
                <Line/>
                <Parthners/>
                <Line/>
                <Since/>
                <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

