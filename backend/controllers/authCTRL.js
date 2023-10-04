const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const userRegister = async (req, res) => {
    try {
        const { email, password, cpassword } = req.body
        const findUser = await User.findOne({ email })
        if (findUser) {
            res.json({
                msg: "user already exists"
            })
        }
        if (password !== cpassword) {
            res.json({
                msg: "password does not match"
            })
        }
        if (!findUser && password === cpassword) {
            await User.create(req.body)
            res.json({
                msg: "registration successfully completed"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const findUser = await User.findOne({ email: email, password: password })
        if (!findUser) {
            res.json({
                msg: "invalid credentials"
            })
        }
        else {
            let payload = {
                user: {
                    id: findUser.id
                }
            }
            jwt.sign(payload, "jwtKey", { expiresIn: 360000 }, (err, token) => {
                if (err) throw err
                return res.json({ token })
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getUser = async (req, res) => {
    try {
        let exist = await User.findById(req.user.id)
        if (!exist) {
            return res.send("user not found")
        }
        res.json(exist)
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const { email, fullname, mobile } = req.body
        const findUser = await User.findOne({ email })
        if (findUser) {
            const user = await User.findOneAndUpdate({ email: email }, { $set: { fullname: fullname, mobile: mobile } })
            res.send(user)
        } else {
            res.json({
                msg: "user not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = { userLogin, userRegister, getUser, updateUser }