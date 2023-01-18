const express = require('express')
const app = express()

const cors = require('cors')
const port = process.env.PORT || 3030

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => res.status(200).json({msg: "Success Running"}))

app.listen(port, () => {
    console.log(`McQofy Server Running On Port ${port}`);
})