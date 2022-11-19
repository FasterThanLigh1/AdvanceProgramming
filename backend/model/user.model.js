import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    availableBooks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }],
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema)
