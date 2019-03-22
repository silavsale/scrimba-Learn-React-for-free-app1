import React, {Component} from 'react';
import moment from 'moment'

import './App.css';

import './components/header/Header'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main-component/Main";
import Jokes from './components/main-component/Jokes';
import Product from './components/main-component/Product';
import productsData from './components/main-component/vschoolProducts';

let date = moment().format();

class App extends Component {
    state = {
        jokes: [{
            joke: "What do you get when you cross a snake with a tasty dessert?",
            punchline: " A pie-thon!"
        }, {
            joke: "What do you get when two giraffes collide?",
            punchline: " A giraffic jam"
        }, {
            joke: "What happened when the frog’s car broke down on the side of the road?",
            punchline: " It gets toad away."
        }, {
            joke: "What monster plays the most April Fool’s jokes?",
            punchline: "Prankenstein."
        }, {
            joke: "How did the telephone propose to its girlfriend?",
            punchline: " He gave her a ring."
        }]
    };

    productComponents = productsData.map(item => <Product key={item.id} product={item}/>);

    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <div className="Joke">
                    {this.state.jokes.map((joke, index) => {
                        return <Jokes
                            click={() => this.deletePersonHandler(index)}
                            joke={joke.joke}
                            punchline={joke.punchline}
                        />
                    })}
                </div>
                <div>
                    {this.productComponents}
                </div>
                <Footer/>

            </div>
        );
    }
}

export default App;
