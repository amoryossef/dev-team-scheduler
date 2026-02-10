import express from "express"
import type { Request, Response } from "express"
import { ControllerTeamsDev } from "../controllers/teamsDevControllers";
import type { Meeting } from "../types";



const teamsDev = express.Router();

teamsDev.get('/teamsDev', async (req: Request, res: Response) => {
    try {

        const response = await ControllerTeamsDev.getTeamsDevLogic()
        if (Array.isArray(response) && response.length === 0) {
            res.status(404).send("No development groups ")
        }
        res.status(200).json(response)

    } catch (error) {
        res.status(500).send(error)
    }

})

teamsDev.post('/meetingTeam', async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const response = await ControllerTeamsDev.getMeetingTeamDevLogic(id)
        if (Array.isArray(response) && response.length === 0) {
            return res.status(404).send(`There are no meetings for  development group ${id}. `)
        }

        res.status(200).json(response)


    } catch (error) {
        res.status(500)
            .send(error)

    }
})

teamsDev.put('/newMeeting', async (req: Request, res: Response) => {

    try {
        const newMeeting: Meeting = req.body
        const { newId, message } = await ControllerTeamsDev.putNewMeeting(newMeeting)

        res.status(200).send(`The meeting ${newId} ${message}`)


    } catch (error) {
        res.status(500)
            .send(error)

    }
})




export default teamsDev