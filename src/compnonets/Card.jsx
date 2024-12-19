import React from "react";
import { BASE_URL, DEFAULT_AVATAR } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const Card = ({ user }) => {
  const { _id, firstName, lastName, age, about, photoUrl, gender } = user;
  console.log(user);
  const dispatch = useDispatch();
  const handleSendRequest = async (staus, id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/" + staus + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(id));
    } catch (error) {
      console.error(error);
    }
  };
  if (!user) return <div>loading</div>;
  return (
    <div className=" card-actions rounded-lg bg-base-300 w-3/12  shadow-xl">
      <figure>
        <img src={photoUrl || DEFAULT_AVATAR} alt="user photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-info"
            onClick={() => {
              handleSendRequest("ignored", _id);
            }}
          >
            ignore
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              handleSendRequest("interested", _id);
            }}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
