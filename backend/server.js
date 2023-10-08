const express = require("express")
require("dotenv").config()
const dbConnect = require("./config/db")
const router = require("./routes/authRouter")
const cors = require("cors")
const bodyParser = require("body-parser")
const compileRouter = require("./routes/compilerRouter")
const port = process.env.Port
const app = express()


dbConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get("/", (req, res) => {
    res.send("working")
})

app.use("/api", router)
app.use("/", compileRouter)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})