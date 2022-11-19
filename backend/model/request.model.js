import mongoose from "mongoose"

const requestSchema = mongoose.Schema({
    ownerBookID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
    },
    offerBookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
    },
    offerUserName: {
        type: String,
        required: true
    },
    offerBookName: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
}, {timeStamps: true})

export default mongoose.model("Request", requestSchema)
    