import { useEffect, useRef, useState } from "react";
import type { MeetingType } from "../types";
import TeamsDev from "../home/TeamsDev";
import ButtonNewMeeting from "./ButtonNewMeeting";

const NewMeeting = () => {
  const [newMeeting, setNewMeeting] = useState<MeetingType>({
    development_group_code: 0,
    date_start_time: "",
    date_end_time: "",
    description: "",
    room_name: "",
  });

  // console.log(newMeeting);

  const [idNewMeeting, setidNewMeeting] = useState<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setNewMeeting({ ...newMeeting, development_group_code: idNewMeeting });
  }, [idNewMeeting]);

  return (
    <form ref={formRef} className="form-new-meeting">
      <TeamsDev setidNewMeeting={setidNewMeeting}></TeamsDev>

      <div className="div-wraps-input">
        <label htmlFor="input-description">* Meeting description:</label>
        <input
          className="input-form"
          id="input-description"
          type="text"
          placeholder="Who touched my server?!"
          name="description"
          onChange={(e) =>
            setNewMeeting({ ...newMeeting, description: e.target.value })
          }
          required
        />
      </div>
      <div className="div-wraps-input">
        <label htmlFor="input-room-name">Room name:</label>
        <input
          id="input-room-name"
          type="text"
          placeholder="Room 404 (JK, it exists)"
          name="room-name"
          className="input-form"
          onChange={(e) =>
            setNewMeeting({ ...newMeeting, room_name: e.target.value })
          }
          required
        />
      </div>

      <div className="div-wraps-input">
        <label htmlFor="input-date_start_time">* From date and time:</label>
        <input
          id="input-date_start_time"
          type="datetime-local"
          name="date-start-time"
          className="input-form"
          onChange={(e) =>
            setNewMeeting({ ...newMeeting, date_start_time: e.target.value })
          }
          required
        />
      </div>

      <div className="div-wraps-input">
        <label htmlFor="input-date_end_time">* To</label>
        <input
          id="input-date_end_time"
          type="datetime-local"
          min={newMeeting.date_start_time}
          name="date-end-time"
          className="input-form"
          onChange={(e) =>
            setNewMeeting({ ...newMeeting, date_end_time: e.target.value })
          }
          required
        />
      </div>

      <ButtonNewMeeting
        newMeeting={newMeeting}
        setNewMeeting={setNewMeeting}
        formRef={formRef}
      ></ButtonNewMeeting>
      {/* {idNewMeeting} */}
    </form>
  );
};

export default NewMeeting;
