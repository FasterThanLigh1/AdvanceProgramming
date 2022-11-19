import Book from "../model/book.model.js"
import User from "../model/user.model.js"

export function createBook(req, res) {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        userId: req.body.userId,
    })
    
    book.save()
        .then(data => {
            User.findById(req.body.userId, (err, user) => {
                user.availableBooks.push(data._id)
            })
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            })
        })
}
export function findBook(req, res) {
    Book.findById(req.params.bookId)
        .then(book => {
            if (!book) {
                return res.status(404).send({
                    message: "Book not found with id " + req.params.bookId
                })
            }
            res.send(book)
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Book not found with id " + req.params.bookId
                })
            }
            return res.status(500).send({
                message: "Error retrieving book with id " + req.params.bookId
            })
        })
}
export function findAllBooks(req, res) {
    Book.find()
        .then(books => {
            res.send(books)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving books."
            })
        })
}

export function findMyBooks(req, res) {
    Book.find({userId: req.params.userId})
        .then(books => {
            res.send(books)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving books."
            })
        })
}

export function listBooks(req, res) {
    Book.find()
        .then(books => {
            res.send(books.filter(book => book.userId !== req.params.userId))
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving books."
            })
        })

}





