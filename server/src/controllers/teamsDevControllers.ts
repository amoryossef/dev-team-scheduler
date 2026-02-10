
import { ModelTeamsDev } from "../model/teamsDevModel";
import { Meeting } from "../types";

export class ControllerTeamsDev {

    static async getTeamsDevLogic() {
        try {
            const res = await ModelTeamsDev.getTeamsDev()
            return res

        } catch (error) {
            throw console.log(`control error: ${error}`);
        }

    }

    static async getMeetingTeamDevLogic(id: number) {
        try {
            const res = await ModelTeamsDev.getMeetingTeamDev(id)
            return res

        } catch (error) {
            throw console.log(`control error: ${error}`);
        }

    }

    static async putNewMeeting(newMeeting: Meeting) {
        try {
            const res = await ModelTeamsDev.putNewMeeting(newMeeting)
            const success = {
                message: "Created successfully",
                newId: res.insertId
            }
            return success

        } catch (error) {
            throw console.log(`control error: ${error}`);
        }

    }

}
