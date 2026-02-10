import axios from "axios";
import type { MeetingType } from "../types";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const Meetings = () => {
    
  const [cardsMeeting, setCardsMeeting] = useState<MeetingType[]>([]);

    const contextIdTeams = useContext(MyContext);
    if (!contextIdTeams) {
      throw new Error("Context is null!");
    }
    const {id} = contextIdTeams;


  const getMeetings = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/app/teamsDev/meetingTeam",
        { id: id }
      );
      const meetings: MeetingType[] = res.data;
      setCardsMeeting(meetings);
    } catch (error) {
      console.log(error);
    }
  };
  getMeetings();

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return (
    <div className="cards-meeting">
      {cardsMeeting.map((obj) => (
        <div className="card">
          <h4 className="card-title">{obj.name}</h4>
          <div className="content-card date">
            {new Date(obj.date_start_time).toLocaleTimeString(
              "he-IL",
              dateOptions
            )}{" "}
            -{" "}
            {new Date(obj.date_end_time).toLocaleTimeString(
              "he-IL",
              timeOptions
            )}
          </div>
          <div className="content-card">{obj.description}</div>
          <div className="content-card">{obj.room_name}</div>
        </div>
      ))}
    </div>
  );
};

export default Meetings;
