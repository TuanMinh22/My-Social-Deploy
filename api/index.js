const express = require('express')
const path = require('path')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
var route = require('./routes');
// const postRouter = require('./models/Post');
const multer = require('multer');

dotenv.config();
//db
try {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log("Connect Succesfully");
} catch (e) {
    console.log('connect failed');
}

app.use("/images", express.static(path.join(__dirname, "public/images")))
//middleware
app.use(express.urlencoded());
app.use(express.json());
//helmet
app.use(helmet());
//morgan
app.use(morgan('combined'));
//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File upload successfully!")
    } catch (err) {
        console.log(err)
    }
});
//route init
route(app);
// app.use('/posts', postRouter);
app.listen(8800, () => {
    console.log('Backend sever is running')
})