
import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import type { Meeting, Teams } from "../types";


export class ModelTeamsDev {

  static async getTeamsDev() {
    try {

      const query = 'SELECT * FROM development_groups';
      const [rows] = await pool.query<RowDataPacket[]>(query);
      // console.log(rows)
      return rows
    }
    catch (error) {
      throw error
    }
  }

  static async getMeetingTeamDev(id: number) {
    try {


      const query = `  SELECT * FROM meetings join development_groups using(development_group_code) where development_group_code = ${id}`;
      const [rows] = await pool.query<RowDataPacket[]>(query);
      // console.log(rows)
      return rows;
    } catch (error) {
      throw error
    }
  }

  static async putNewMeeting({ development_group_code, date_start_time, date_end_time, description, room_name }: Meeting) {
    try {
      const query = 'INSERT INTO meetings(development_group_code, date_start_time, date_end_time, description, room_name)  VALUES (?, ?, ?, ?, ?)';
      const [result] = await pool.query<ResultSetHeader>(query, [development_group_code, convertToMySQLDate(date_start_time), convertToMySQLDate(date_end_time), description, room_name]);
      // console.log(result)
      return result;

    } catch (error) {
      throw console.log(`model error: ${error}`);

    }
  }

}

const convertToMySQLDate = (isoDate: string): string => {

  return isoDate.slice(0, 19).replace('T', ' ');
};