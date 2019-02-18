import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import List from './List';
import InitData from './data/InitData';
import Add from './forms/Add';

export class GroceryList extends Component {
    state = InitData;

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }
        
        const destinationIndexValue = this.state.lists[source.droppableId].itemIds[destination.index];
        const destinationItemValue = this.state.items[destinationIndexValue];

        if (destinationItemValue.checked) {
            return
        }

        const list = this.state.lists[source.droppableId];
        const newItemIds = Array.from(list.itemIds);
        newItemIds.splice(source.index, 1);
        newItemIds.splice(destination.index, 0, draggableId);

        const newList = {
            ...list,
            itemIds: newItemIds,
        };

        const newState = {
            ...this.state,
            lists: {
                ...this.state.lists,
                [newList.id]: newList,
            }
        };

        this.setState(newState);
    };

    onUpdate = (listId, id, name, price) => {
        const list = this.state.lists[listId];
        const newItemIds = Array.from(list.itemIds);
        newItemIds.unshift(id);

        const newList = {
            ...list,
            itemIds: newItemIds,
        };

        const newState = {
            ...this.state,
            items: {
                ...this.state.items,
                [id]: { id: id, name: name, price: price }
            },
            lists: {
                ...this.state.lists,
                [newList.id]: newList,
            }
        };
        this.setState(newState);
    };

    handleEvent = (listId, id) => {
        const list = this.state.lists[listId];
        const newItemIds = Array.from(list.itemIds);
        const filteredItemsIds = newItemIds.filter(item => !id.includes(item));

        const items = this.state.items;
        delete items[id];

        const newList = {
            ...list,
            itemIds: filteredItemsIds,
        };

        const newState = {
            ...this.state,
            items: {
                ...this.state.items,
            },
            lists: {
                ...this.state.lists,
                [newList.id]: newList,
            }
        };

        this.setState(newState);
    };

    handleInputChange = (listId, id, boolean) => {
        const list = this.state.lists[listId];
        const newItemIds = Array.from(list.itemIds);
        const filteredItemsIds = newItemIds.filter(item => !id.includes(item));

        if(boolean) {
            filteredItemsIds.push(id);
        }else{
            filteredItemsIds.unshift(id);
        }

        const items = this.state.items;
        const item = items[id];
        item.checked = boolean;

        const newList = {
            ...list,
            itemIds: filteredItemsIds,
        };

        const newState = {
            ...this.state,
            items: {
                ...this.state.items,
                [id]: item,
            },
            lists: {
                ...this.state.lists,
                [newList.id]: newList,
            }
        };

        this.setState(newState);
    }

    render() {
        return (
            <div>
                {this.state.listOrder.map(listId => {
                    const list = this.state.lists[listId];
                    const items = list.itemIds.map(itemId => this.state.items[itemId]);

                    return <Add key={list.id} list={list} items={items} onUpdate={this.onUpdate} />
                })}
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    {this.state.listOrder.map(listId => {
                        const list = this.state.lists[listId];
                        const items = list.itemIds.map(itemId => this.state.items[itemId]);

                        return <List key={list.id} list={list} items={items} handleEvent={this.handleEvent} handleInputChange={this.handleInputChange} />
                    })}
                </DragDropContext>
            </div>
        )
    }
}

export default GroceryList;