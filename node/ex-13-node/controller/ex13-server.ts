const joi = require('joi')
const pgPromise = require('pg-promise');

const db = pgPromise()("postgres://postgres:postgres98@localhost:5432/postgres");

//ex-13
const setupDb = async () => {
  await db.none(`
  DROP TABLE IF EXISTS planets;

  CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
  );
  `)

  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`)
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`)
}

setupDb()

const getAll = async (req, res) => {
  const planets = await db.many(`SELECT * FROM planets`)
    res.status(200).json(planets)
}

const getOneById = async (req, res) => {
    const {id} = req.params;
    const planet = await db.oneOrNone(`SELECT * FROM planets WHERE id=$1;`, Number(id))
    res.status(200).json(planet);
  }

const planetSchema = joi.object({
    name: joi.string().required(),
})

const create = async (req, res) => {
    const {name} = req.body
    const newPlanet = {name}
    const validatedNewPlanet = planetSchema.validate(newPlanet)

    if (validatedNewPlanet.error) {
        return res.status(400).json({ msg: validatedNewPlanet.error.details[0].message })
    } else {
      await db.none(`INSERT INTO planets (name) VALUES ($1)`, name)
      res.status(201).json({msg: "The planet was created."})
    }
  }

const updateById = async (req, res) =>{
    const {id} = req.params
    const {name} = req.body
    await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name])
    res.status(200).json({msg: "The planet was updated"})
  }

const deleteById = async (req, res) =>{
    const {id} = req.params;
    await db.none(`DELETE FROM planets WHERE id=$1`, Number(id))
    res.status(200).json({ msg: "The planet was deleted"});
  }

  //ex-14
  const createImage = async (req, res) =>{
    const {id} = req.params;
    const filename = req.file?.path;
    if (filename) {
      db.none("UPDATE planets SET image=$2 WHERE id=$1", [id, filename])
      res.status(201).json({msg: "Planet image uploded successfully"})
    }else{
      res.status(400).json({msg : "Planet image failed to upload"})
    }
  }

export { getAll, getOneById, create, updateById, deleteById, createImage}