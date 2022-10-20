import dbConnect from "./dbConnect.js"

export async function getAllFurniture(req, res) {
    // connect to the databse 
    const db = dbConnect()
    // get the whole furniture collection
   const collection = await db.collection("furniture").find({}).toArray()
    // catch any errors -> status 500
    .catch(err => {
        res.status(500).send(err)
        return
    })
    // send back the array of furniture
    res.send(collection)
}

export async function addNewFurniture(req, res) {
    //get new furniture from the body of the request
    const { brand, model, type, price } = req.body
    const newFurniture = {brand, model, type, price: Number(price)}
    //connect to database
    const db = dbConnect()
    //put this new furniture into our furniture collecion in our db
    await db.collection('furniture').insertOne(newFurniture)
    //catch errors and send with status 500
    
    //return responce with 201 all bueno
    res.status(201).send({message: 'Furniture added'})
}