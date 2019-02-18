import React, {Component} from 'react'
import {Droppable} from "react-beautiful-dnd";
import Item from './Item';

export default class List extends Component {
    handleEvent = (id) => {
        this.props.handleEvent(
            this.props.list.id,
            id,
        )
    };

    handleInputChange = (id, boolean) => {
        this.props.handleInputChange(
            this.props.list.id,
            id,
            boolean,
        )
    }

    render() {
        return (
            <div>
                <h2>{this.props.list.title}</h2>
                <Droppable droppableId={this.props.list.id}>
                    {(provided) => (
                        <ul className="list-group"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {this.props.items.map((item, index) => <Item key={item.id} item={item} index={index}
                                                                         handleEvent={this.handleEvent} handleInputChange={this.handleInputChange}/>)}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </div>
        )
    }
}