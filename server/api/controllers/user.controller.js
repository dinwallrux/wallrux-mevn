const User = require('../models/user.model')

exports.registerNewUser = async (req, res) => {
    try {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        let data = await user.save()
        const token = await user.generateAuthToken() // here it is calling the method that we created in the model
        res.status(201).json({ data, token })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).json({ error: "Login failed! Check authentication credentials" })
        }
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.getUserDetails =  async (req, res) => {
    await res.json(req.userData)
}

exports.updateUser = async (req, res) => {
    const q = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.json(q)
}