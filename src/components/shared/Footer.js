import React, { Component } from 'react';

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }

    componentDidMount() {
        const that = this;
        const year = new Date().getFullYear();
        that.setState({
            date:
               year
        });
    }

    render(){
        return (
            <footer className="fixed-bottom bg-light pt-3">
                <div className="container">
                    <p>&copy; GroceryList {this.state.date}</p>
                </div>
            </footer>
        );
    }
}

export default Footer;