import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan';

import restaurantsRoutes from "./routes/restaurants.js"

import express from "express";
const app = express();
app.use(morgan("dev"))
app.use(express.json())

const port = process.env.PORT || 4000

/**Using the routes */
app.use('/restaurants',restaurantsRoutes)


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
