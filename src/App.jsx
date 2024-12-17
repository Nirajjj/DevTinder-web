import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./compnonets/Login";
import Profile from "./compnonets/Profile";
import Body from "./compnonets/Body";
import Feed from "./compnonets/Feed";
import Connections from "./compnonets/Connections";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
