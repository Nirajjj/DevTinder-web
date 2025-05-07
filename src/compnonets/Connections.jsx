import React, { useEffect } from "react";
import { BASE_URL, DEFAULT_AVATAR } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { useNavigate } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const connectionArray = useSelector((store) => store.connection);
  console.log(connectionArray);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      // console.log(res.data);

      dispatch(addConnection(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (!connectionArray || connectionArray.length === 0) {
    return (
      <div>
        No connections
        <p onClick={() => navigate("/")} className="link">
          🔍 Explore developers to connect with →
        </p>
      </div>
    );
  }
  return (
    <div className="h-screen">
      <h1 className="font-semibold text-center text-2xl mb-7">Connections</h1>
      {connectionArray.map((connection) => {
        const { _id, firstName, lastName, about, age, photoUrl, gender } =
          connection;
        return (
          <div
            key={_id}
            className="card card-side bg-base-300 shadow-xl m-auto p-4 flex  gap-3 mb-3 md:w-96 w-full"
          >
            <figure className="w-20 shrink-0">
              <img
                src={photoUrl || DEFAULT_AVATAR}
                alt="Movie"
                className=" rounded-full w-20"
              />
            </figure>
            <div className="p-5">
              <h2 className="card-title">{firstName + " " + lastName}</h2>
              <p>{about}</p>
              {age && gender && <p>{age + " " + gender}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
