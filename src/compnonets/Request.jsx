import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL, DEFAULT_AVATAR } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const requestsArray = useSelector((store) => store.request);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reviewRequest = async (status, id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      fetchRequest();
    } catch (error) {
      console.error(error);
    }
  };
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
    return (
      <div className="font-bold text-center mt-7 text-lg h-screen">
        No Requests Yet
        <p onClick={() => navigate("/")} className="link">
          🔍 Explore developers to connect with →
        </p>
      </div>
    );
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
            className="card card-side bg-base-300 shadow-xl w-2/6 m-auto mb-7 fles justify-center items-center px-3 py-5 border  border-purple-800"
          >
            <figure>
              <img
                src={photoUrl || DEFAULT_AVATAR}
                alt="Movie"
                className=" rounded-full w-20"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{firstName + " " + lastName}</h2>
              <p>{about}</p>
              {age && gender && <p>{age + " " + gender}</p>}
            </div>
            <div className="card-actions justify-center">
              <button
                className="btn btn-info"
                onClick={() => {
                  reviewRequest("rejected", request._id);
                }}
              >
                Reject
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  reviewRequest("accepted", request._id);
                }}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
