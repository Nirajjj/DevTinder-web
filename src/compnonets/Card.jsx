import React from "react";
import { DEFAULT_AVATAR } from "../utils/constants";

const Card = ({ user }) => {
  if (!user) return <div>loading</div>;
  const { firstName, lastName, age, about, photoUrl, gender } = user;
  console.log(user);

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
          <button className="btn btn-info">ignore</button>
          <button className="btn btn-success">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
