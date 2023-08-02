import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Home,
  ForYou,
  Discover,
  Jobs,
  SignUp,
  Login,
  Assets,
  PageDetailed,
  Hire,
} from "../src/pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="foryou" element={<ForYou />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/discover " element={<Discover />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/pagedetailed" element={<PageDetailed />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
