import Request from "../models/request.model.js"
import Book from "../models/book.model.js"
import User from "../models/user.model.js"

export const createRequest = async (req, res) => {
    const request = new Request({
        ownerBookId: req.body.ownerBookId,
        offerBookId: req.body.offerBookId
    })
    try {
        const savedRequest = await request.save()
        res.status(201).json(savedRequest)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export const findRequest = async (req, res) => {
    try {
        const request = Request.find({ownerBookId: req.params.bookId}).then(request => {res.send(request)})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}