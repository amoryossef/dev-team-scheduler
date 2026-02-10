import "./App.css";
import { Link,Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NewMeeting from "./components/new-meeting/NewMeeting";
import { createContext } from "react";
import type { PropsGroupMeetings } from "./components/types";
import DevTeamLogo from "./components/home/Logo";
import './style/home.css'
import './style/newMeeting.css'

export const MyContext = createContext<PropsGroupMeetings | null>(null);

function App() {
  return (
    <div className="app">
      <nav>
        <DevTeamLogo/>
        <Link to={'/'} className="link-home btn ">Home</Link>
        <Link to={'/newMeeting'} className="link-new-meeting btn ">+ New Meeting</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newMeeting" element={<NewMeeting />} />
      </Routes>
    </div>
  );
}

export default App;
