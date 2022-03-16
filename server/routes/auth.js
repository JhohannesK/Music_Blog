import express from 'express'
const router = express.Router()
import User from '../models/Users.js'
import bcrypt from 'bcrypt'

// Register user
router.post("/register", async (req, res) => {
      try {
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(req.body.password, salt)
            const newUser = new User({
                  username: req.body.username,
                  email: req.body.email,
                  password: hashedPass,
            })

            const user = await newUser.save()
            res.status(200).json(user)
      } catch (err) {
            res.status(500).json(err)
      }
})



router.post('/login', async (req, res) => {
      try {
            const user = User.findOne({ username: req.body.username })
            !user && res.status(402).json("Wrong Credentials")

            const validate = await bcrypt.compare(req.body.password, user.password)
            !validate && res.status(402).json("Wrong Crendentials")

            res.status(200).json(user)
      } catch (error) {
            res.status(500).json(error)

      }
})

export default router
