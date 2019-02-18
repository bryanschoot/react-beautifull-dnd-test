import React, {Component} from 'react';

const numbers = [];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        this.props.items.map((item) => numbers.push(item.id.substring(5)));

        this.props.onUpdate(
            this.props.list.id,
            'item-' + (Math.max(...numbers) + 1),
            this.state.name,
            this.state.price
        );

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Add item</h2>
                <ul className="list-group py-2">
                    <li className="list-group-item">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Name" id="name"
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Price" id="price"
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="col text-center">
                                    <button type="submit" className="btn btn-success">Add item</button>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        )
    }
}


