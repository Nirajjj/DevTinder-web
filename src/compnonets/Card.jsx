import React from "react";
import { DEFAULT_AVATAR } from "../utils/constants";

const Card = ({ feedUsers }) => {
  const { firstName, lastName, age, about, photoUrl, gender } =
    feedUsers.feedCards[0];
  return (
    <div className=" card-actions rounded-lg bg-base-300 w-3/12  shadow-xl">
      <figure>
        <img src={photoUrl || DEFAULT_AVATAR} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName}</h2>
        <p>{age && gender && age + " " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-info">ignore</button>
          <button className="btn btn-success">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
