import type { Dispatch, RefObject, SetStateAction } from "react";

export type Teams = {
  name: string;
  development_group_code: string;
};
export interface SetIdTeam {
  handleTeamSelected: (newId: number) => void;
}
export interface PropsGroupMeetings {
  id?: number;
  setId?: (id: number) => void; 
}

export interface PropsidNewMeeting {
  idNewMeeting?: number;
  setidNewMeeting?: Dispatch<SetStateAction<number>>;
}

export type MeetingType = {
  development_group_code: number;
  date_start_time: string;
  date_end_time: string;
  description: string;
  room_name: string | number;
  name?: string;
};
export interface PropsToButtonNewMeeting{
    newMeeting:MeetingType
    formRef:RefObject<HTMLFormElement | null>
    setNewMeeting:Dispatch<SetStateAction<MeetingType>>
}