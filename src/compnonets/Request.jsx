import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL, DEFAULT_AVATAR } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const Request = () => {
  const requestsArray = useSelector((store) => store.request);
  const dispatch = useDispatch();
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  if (!requestsArray || requestsArray.length === 0) {
    return <div>No request</div>;
  }
  return (
    <div className="h-screen">
      <h1 className="font-semibold text-center text-2xl mb-7">Requests</h1>
      {requestsArray.map((request) => {
        const { _id, firstName, lastName, about, age, photoUrl, gender } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="card card-side bg-base-300 shadow-xl w-2/6 m-auto mb-7"
          >
            <figure>
              <img
                src={photoUrl || DEFAULT_AVATAR}
                alt="Movie"
                className=" rounded-full w-20 ml-7"
              />
            </figure>
            <div className="card-body">
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

export default Request;
