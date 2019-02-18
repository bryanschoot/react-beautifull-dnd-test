import React, { Component } from 'react';
import { Draggable } from "react-beautiful-dnd";

export default class Item extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {

        this.props.handleEvent(
            this.props.item.id
        );

        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.props.handleInputChange(
            this.props.item.id,
            value,
        );
    }

    render() {
        return (
            <Draggable draggableId={this.props.item.id} isDragDisabled={this.props.item.checked} index={this.props.index}>
                {(provided) => (
                    <li className={(!this.props.item.checked ? "list-group-item" : 'list-group-item bg-secondary text-white')}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div className="row">
                            <div className="col">
                                <input
                                    type="checkbox"
                                    checked={this.props.item.checked}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="col">
                                {this.props.item.name}
                            </div>
                            <div className="col text-right">
                                {this.props.item.price}
                            </div>
                            <div className="col">
                                <input
                                    type="number"
                                    min={0}
                                    max={10}
                                />
                            </div>
                            <div className="col">
                                <form onSubmit={this.handleSubmit}>
                                    <button type="submit"
                                        className="btn btn-danger"
                                        disabled={this.props.item.checked}
                                    >Delete item
                                    </button>
                                </form>
                            </div>
                        </div>
                    </li>
                )}
            </Draggable>
        );
    }
}