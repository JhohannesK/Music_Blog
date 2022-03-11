import express from 'express'
const router = express.Router()
import User from '../models/Users.js'
import bcrypt from 'bcrypt'

// Register user
router.post("/", async (req, res) => {
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



router.post('/')

export default router
