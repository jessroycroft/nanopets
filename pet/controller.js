const Pet = require('./model');
const pets = {};

//UPDATE
pets.playPet = (req, res) => {
    Pet.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err)
        } else {
            console.log(doc)
        }
    })
    // const pet = Movie.findById(req.params.id, (err, doc) => {
    //     if (err) {
    //         res
    //             .status(500)
    //             .send(err);
    //     } else {
    //         delete req.body._id;
    //         const updatedPet = Object.assign(doc, model);
    //         updatedPet.save((err, doc) => {
    //             if (err) {
    //                 res
    //                     .status(500)
    //                     .send(err);
    //             } else {
    //                 res
    //                     .status(200)
    //                     .send(doc);
    //             }
    //         });
    //     }
    // });
}

pets.listPets = (req, res) => {
    Pet.find().exec()
        .then(records => res.send(records));
}

module.exports = pets

// module.exports = {
//     listPets: (req, res) => {
//         Pet.find().exec()
//             .then(records => res.send(records));
//     }
// }