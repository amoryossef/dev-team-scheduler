import {   useState } from "react";
import TeamsDev from "./TeamsDev";
import Meetings from "./Meetings";
import { MyContext } from "../../App";

const Home = () => {
  const [id, setId] = useState(0);

  

  return (
    <div className="home">
      <MyContext.Provider value={{ id: id, setId:  setId}}>
      <TeamsDev />
      <Meetings/>
      </MyContext.Provider>
    </div>
  );
};

export default Home;
