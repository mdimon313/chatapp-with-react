import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Chat/Login";
import ChatBox from "./components/Chat/ChatBox";
import Nav from "./components/Chat/Nav";
import Reg from "./components/Chat/Reg";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/enroll" element={<Reg />} />
        <Route path="/chat" element={<ChatBox />} />
        {/* // <Login /> */}
        {/* <Reg /> */}
      </Routes>
    </>
  );
}

export default App;
