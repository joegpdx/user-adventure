// quests[0].choices[0].description; ==> 'negotiate with them'


const htmllists = {
    id: 'htmllists',
    title: 'HTML Lists Question',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',
    audio: '',
    action: '',
    description: `
            Ordered lists use ______.
    `,
    choices: [{
        id: 'select1',
        description: 'numbers',
        result: `
            correct! You get 35 gold!. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'select2',
        description: 'numbers',
        result: `
            You are wong. You lose 30 hp. 
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'select3',
        description: 'hyphens',
        result: `
            You are way wong. You loss 50 hp. 
        `,
        hp: -50,
        gold: 0
    }]
};

const csslayouts = {
    id: 'csslayouts',
    title: 'CSS Layout Question',
    map: {
        top: '57%',
        left: '20%'
    },
    image: '',
    audio: '',
    action: '',
    description: `
            CSS _________ provide rules for common tasks.
    `,
    choices: [{
        id: 'select1',
        description: 'grids',
        result: `
            You are close, but wong. You loss 35 hp and gain 35 gold. 
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'select2',
        description: 'divs',
        result: `
            You are way wong. You loss 45 hp. 
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'select3',
        description: 'framworks',
        result: `
            correct! You get 90 gold! 
        `,
        hp: 0,
        gold: 90
    }]
};

const jsDocumentObjectModel = {
    id: 'jsDocumentObjectModel',
    title: 'JS Document Object Model Question',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '',
    audio: '',
    action: '',
    description: `
            The browser represents the page using a _____ tree.
    `,
    choices: [{
        id: 'select1',
        description: 'DOM',
        result: 'You are Correct! You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'select2',
        description: 'child-elements',
        result: 'Oh no! Way Off! You loss 50 hp',
        hp: -50,
        gold: 0
    }, {
        id: 'select3',
        description: 'Document',
        result: 'Close, so you gain 35 hp, but the correct answer is DOM!',
        hp: 35,
        gold: 0
    }]
};

const questions = [
    htmllists,
    csslayouts,
    jsDocumentObjectModel,
];

export default questions;