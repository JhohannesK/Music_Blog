import express, { json } from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'


dotenv.config()

const app = express()
app.use(express.json())

app.use("/admin", authRoute)


const CONNECTION_URL = process.env.MONGO_URL

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => app.listen(PORT, () => { console.log(`App running on port ${PORT}`); }))
      .catch((error) => { console.log(error.message); })



