const InitData = {
    items: {
        'item-1': {id: 'item-1', name: 'Carrot', price: '$ 1,95', checked: false},
        'item-2': {id: 'item-2', name: 'Potato', price: '$ 2,50', checked: false},
        'item-3': {id: 'item-3', name: 'Broccoli', price: '$ 3,95', checked: false},
    },
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'List',
            itemIds: ['item-1', 'item-2', 'item-3'],
        },
    },
    listOrder: ['list-1'],
};

export default InitData;