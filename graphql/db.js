export const people = [
    {
        id:'0',
        name: 'kimjaehyune',
        age:'30',
        gender: 'female;'
    },
    {
        id:'1',
        name: 'tomato',
        age:'12',
        gender: 'female;'
    },
    {
        id:'2',
        name: 'smile',
        age:'11',
        gender: 'female;'
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}