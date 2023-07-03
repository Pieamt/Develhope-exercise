//ex-10
import express from "express";
import "express-async-errors"
import morgan from "morgan"
import 'dotenv/config.js'

const app = express();
app.use(express.json())
app.use(morgan("dev"));
import { getAll, getOne, create, updateById, deleteById} from "./controller/ex11-server.js";

const port = process.env.PORT || 3000;

let planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

//ex-11
// get all
app.get('/api/planets', getAll);

//get one by id
app.get('/api/planets/:id', getOne )

//create
app.post("/api/planets", create );

//update
app.put("/api/planets/:id", updateById )

//delete
app.delete("/api/planets/:id", deleteById )

app.listen(port, () => {
    console.log(`Example app listening...`)
  })