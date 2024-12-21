import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./compnonets/Login";
import Profile from "./compnonets/Profile";
import Body from "./compnonets/Body";
import Feed from "./compnonets/Feed";
import Connections from "./compnonets/Connections";
import Request from "./compnonets/Request";
import Signup from "./compnonets/Signup";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
