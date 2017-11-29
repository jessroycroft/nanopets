const mongoose = require('mongoose');
const Pet = require('./pet/model');
mongoose.connect('mongodb://localhost/nanopets');


const pets = [
    {
        name: 'Billy',
        age: 0,
        happiness: 'happy',
        hungry: false,
        sprite: 'tamagotchi.png',
    },
    {
        name: 'Francine',
        age: 1,
        happiness: 'bored',
        hungry: true,
        sprite: 'kuchipatchi.png',
    }
]

Pet.remove().then(() => {
    pets.forEach(petData => {
        const pet = new Pet(petData);
        pet.save().then(() => console.log(`Saved ${pet.name}`));
    })
})