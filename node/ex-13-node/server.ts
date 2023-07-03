import express from "express";
import "express-async-errors"
import morgan from "morgan"
import 'dotenv/config.js'
import { getAll, getOneById, create, updateById, deleteById, createImage} from "./controller/ex13-server.js";
import multer from "multer"

const app = express();
//ex-14
const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})
const upload = multer({storage})


app.use(morgan("dev"));
app.use(express.json())


const port = process.env.PORT || 3000;


// get all
app.get('/api/planets', getAll);

//get one by id
app.get('/api/planets/:id', getOneById )

//create
app.post("/api/planets", create );

//update
app.put("/api/planets/:id", updateById )

//delete
app.delete("/api/planets/:id", deleteById )

//create image  (ex-14)
app.post("/api/planets/:id/image", upload.single("image"), createImage)

app.listen(port, () => {
    console.log(`Example app listening...`)
  })