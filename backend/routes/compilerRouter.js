const express = require("express")
const oCompile = require("../controllers/compilerCTRL")
const compileRouter = express.Router()

compileRouter.post("/compilecode", oCompile)

module.exports = compileRouter

