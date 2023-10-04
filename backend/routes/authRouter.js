const express = require("express")
const { userRegister, userLogin, getUser, updateUser } = require("../controllers/authCTRL")
const authMiddleware = require("../middlewares/authmiddleware")
const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/getuser", authMiddleware, getUser)
router.post('/updateuser', updateUser)

module.exports = router