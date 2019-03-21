import React, {Component} from 'react';
import './App.css';
import './components/header/Header'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main-component/Main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
