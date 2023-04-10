const data = [
    {
        id: "1",
        date: '2020-01-01',
        from: '08:00',
        to: '09:00',
        ref: 'ADMIN',
        tag: 'admin',
        shortDescription: 'Lorem ipsum dolor',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    },
    {
        id: "2",
        date: '2020-01-01',
        from: '09:00',
        to: '10:00',
        ref: 'PROJECT',
        tag: 'project',
        shortDescription: 'Lorem ipsum dolor',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    },
    {
        id: "3",
        date: '2020-01-01',
        from: '10:00',
        to: '12:00',
        ref: 'Joure Fix',
        tag: 'admin',
        shortDescription: 'Lorem ipsum dolor',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    },
    {
        id: "4",
        date: '2020-01-01',
        from: '13:00',
        to: '16:00',
        ref: 'NEWSYS',
        tag: 'project',
        shortDescription: 'Lorem ipsum dolor',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    }
];

module.exports = {
    getAll: () => {
        return data;
    },
    getById: (id) => {
        return data.find(item => item.id === id);
    },
    create: (newItem) => {
        data.push(newItem);
        return data;
    },
    update: (id, newItem) => {  
        const index = data.findIndex(item => item.id === id);
        data[index] = newItem;
        return data;
        },
    delete: (id) => {   
        const index = data.findIndex(item => item.id === id);
        data.splice(index, 1);
        return data;
    }
};