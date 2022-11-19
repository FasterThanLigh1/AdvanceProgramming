import User from "../model/user.model.js"

export function createUser(req, res) {
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    console.log(user)
    user.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            })
        })
}

export function findAll(req, res) {
    User.find()
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            })
        })
}

export function findUser(req, res) {
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                })
            }
            res.send(user)
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                })
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.userId
            })
        })
}



