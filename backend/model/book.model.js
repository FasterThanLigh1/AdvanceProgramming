import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    userId: {
        type: String,
        required: true
    },
    status:{
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

export default mongoose.model("Book", bookSchema)
