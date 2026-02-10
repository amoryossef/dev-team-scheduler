import express, { } from 'express'
import cors from 'cors'
import teamsDev from './routers/teamsDevRouters'
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = process.env.PORT_NODE || 3001
app.use(cors());
app.use(express.json())



app.use('/app/teamsDev', teamsDev)




app.use((req, res) => {
    res.status(404)
    res.send("not found")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})





