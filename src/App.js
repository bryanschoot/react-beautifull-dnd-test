import React, {Component} from 'react';
import Header from './components/shared/Header';
import GroceryList from './components/GroceryList';
import Footer from './components/shared/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <GroceryList/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
