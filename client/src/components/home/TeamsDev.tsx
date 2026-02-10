import axios from "axios";
import { useContext, useEffect, useState } from "react";
import type { PropsidNewMeeting, Teams } from "../types";
import { MyContext } from "../../App";

const TeamsDev = ({ setidNewMeeting }: PropsidNewMeeting) => {
  const [teams, setTeams] = useState<Teams[]>([]);
  const contextIdTeams = useContext(MyContext);

  const isConnected = contextIdTeams !== null;

  //   const effectiveId = isConnected ? contextIdTeams.id : idNewMeeting;
  const effectiveSet = isConnected ? contextIdTeams.setId : setidNewMeeting;

  const getTeamsDev = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:3001/app/teamsDev/teamsDev",
      );
      const teams: Teams[] = res.data;
      // console.log(teams);
      setTeams(teams);
    } catch (error) {
      console.log("get teamsdev", error);
    }
  };

  useEffect(() => {
    getTeamsDev();
  }, []);

  return (
    <select
      onChange={(e) => {
        effectiveSet?.(Number(e.target.value));
      }}
      required
      className="select-teamsdev form-select"
    >
      <option value="">Select Teams</option>
      {teams.map(({ name, development_group_code }) => (
        <option key={development_group_code} value={development_group_code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default TeamsDev;
