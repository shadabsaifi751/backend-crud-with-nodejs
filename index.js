import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.DB_URL;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true })

// bodyparser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => res.send(`node express server is runing ${PORT}`))

app.listen(PORT, () => console.log(`your server is runing on ${PORT}`))