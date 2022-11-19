import express from 'express';
import mongoose from 'mongoose';
import userRoute from './route/user.route.js';
import bookRoute from './route/book.route.js';
import cors from 'cors';
const app = express()
const Router = express.Router

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors());

mongoose.connect("mongodb://localhost:27017/book", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/user", userRoute)
app.use("/book", bookRoute)
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


