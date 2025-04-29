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
    <div className=" card-actions rounded-lg bg-baw-full text-sm xs:w-[90%] sm:w-[48%] md:w-[35%] lg:w-[25%] xl:w-[23%]">
      <figure>
        <img
          src={photoUrl || DEFAULT_AVATAR}
          alt="user photo"
          className=" rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center ">
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
