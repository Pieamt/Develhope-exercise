//ex-10
require('dotenv').config();
const express = require('express');
const app = express();
require('express-async-errors').config();
const joi = require('joi')
app.use(express.json())
app.use(morgan("dev"));

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