const Jokes = require("../models/Jokes");

module.exports.findAllJokes = ( req, res) => {
    Jokes.find()
        .then( allJokes => res.json(allJokes))
        .catch( err => console.log(err));
}

module.exports.findOneJoke = (req, res) => {
    Jokes.findById({_id: req.params.id})
    .then(oneJoke => res.json(oneJoke))
    .catch( err => console.log(err));
}

module.exports.createJoke = ( req, res) => {
    Jokes.create(req.body)
        .then( newJoke => res.json(newJoke))
        .catch( err => res.json(err));
}

module.exports.updateJoke = (req, res) => {
    Jokes.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true}
    )
        .then(updateJoke => res.json(updateJoke))
        .catch( err => res.json(err));
}

module.exports.deleteJoke = (req, res) => {
    Jokes.findByIdAndDelete({ _id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => console.log(err));
}