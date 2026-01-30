import express from 'express'

const app = express
 app.length( (req,res) => {
    res.status(200).send("Hello form devops api")
 })

 export default app