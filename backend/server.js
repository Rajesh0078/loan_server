const express = require("express")
require("dotenv").config()
const dbConnect = require("./config/db")
const router = require("./routes/authRouter")
const bodyParser = require("body-parser")
const port = process.env.Port
const app = express()


dbConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("working")
})

app.use("/api", router)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})