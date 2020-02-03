// quests[0].choices[0].description; ==> 'negotiate with them'


const one = {
    id: 'one',
    title: 'one',
    map: {
        top: '15%',
        left: '75%'
    },
    image: '',
    audio: '',
    action: '',
    description: ``,
    choices: [{
        id: '',
        description: '',
        result: ``,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: '',
        result: ``,
        hp: -30,
        gold: 50
    }, {
        id: '',
        description: '',
        result: ``,
        hp: -50,
        gold: 0
    }]
};

const two = {
    id: 'two',
    title: 'two',
    map: {
        top: '52%',
        left: '5%'
    },
    image: '',
    audio: '',
    action: '',
    description: ``,
    choices: [{
        id: '',
        description: '',
        result: ``,
        hp: -35,
        gold: 35
    }, {
        id: '',
        description: '',
        result: ``,
        hp: -45,
        gold: 0
    }, {
        id: '',
        description: '',
        result: ``,
        hp: 0,
        gold: 90
    }]
};

const purgatory = {
    id: 'purgatory',
    title: 'Purgatory',
    map: {
        top: '90%',
        left: '81%'
    },
    image: 'FreshHighlevelElkhound.gif',
    audio: '',
    action: '',
    description: `
    You have just gone to hell and there are 3 doors.  Which door do you choose?  Door one has you strapped to a chair with long forks in your hands sitting in front of table with a huge buffet of the most delicious foods you’ve ever seen, but everyone looks like they are starving and screaming for the hunger to end.  Door2 is the same as door1, but everyone looks happy and they are all having what seems to be a good time even while being strapped to the chairs. Door3 is the same picture again, but you are not strapped to a chair and the food on the table is stale and but everyone is having an ok time and getting by eating the old stale food. 
    `,
    choices: [{
        id: 'door1',
        description: 'Door One!',
        result: 'You lose 50 HP and live in this hell for eternity gold pieces!',
        hp: -50,
        gold: 0
    }, {
        id: 'door2',
        description: 'Door Two!',
        result: 'Very Good Choice given the options! The reason they are all happy and full is they are feeding each other with the long forks. They get to enjoy the amazing food because they are thinking of others and so do you!  You get to move on.',
        hp: 35,
        gold: 90
    }, {
        id: 'door3',
        description: 'Door Three!',
        result: 'This was the an option, but who want’s to each stale food.  You get 10 HP and can move on.',
        hp: 10,
        gold: 0
    }]
};

const details = [
    one,
    two,
    purgatory,
];

export default details;