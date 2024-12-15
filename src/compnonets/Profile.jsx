import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const user = useSelector((store) => store.user);

  // const {firstName, lastName, age, about, photoUrl, gender} = user.data

  // if (!user) return;
  const [firstName, setfirstName] = useState(user?.data?.firstName || "");
  const [lastName, setlastName] = useState(user?.data?.lastName || "");
  const [age, setAge] = useState(user?.data?.age || "");
  const [about, setAbout] = useState(user?.data?.about || "");
  const [photoUrl, setPhotoUrl] = useState(user?.data?.photoUrl || "");
  const [gender, setGender] = useState(user?.data?.gender || "");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  if (!user) return <div>Loading...</div>;

  const editProfile = async (e) => {
    setError("");
    e.preventDefault();
    try {
      const updatedUser = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, about, photoUrl },
        { withCredentials: true }
      );
      dispatch(updatedUser);
    } catch (error) {
      console.error(error.message);
      setError(error);
    }
  };
  return (
    user && (
      <div className="flex flex-grow-0 items-center justify-center gap-7 min-h-screen">
        <Card user={user?.data} />
        <div className="bg-base-200  flex items-center justify-center w-96">
          <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
            <div className="card-body lg:w-1/2">
              <h2 className="card-title text-2xl font-bold mb-6">
                update profile
              </h2>
              <form>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        type="text"
                        className="grow"
                        value={firstName}
                        onChange={(e) => {
                          setfirstName(e.target.value);
                        }}
                        // placeholder="email@example.com"
                      />
                    </label>
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        className="grow"
                        value={lastName}
                        onChange={(e) => {
                          setlastName(e.target.value);
                        }}
                        // placeholder="Enter password"
                      />
                    </label>
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text">age</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        className="grow"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        // placeholder="Enter password"
                      />
                    </label>
                  </div>
                  <div className="form-control mt-4">
                    <label className="form-control">
                      <div className="label">
                        <span className="label-text-alt">about</span>
                      </div>
                      <textarea
                        className="textarea textarea-bordered h-24"
                        placeholder="Bio"
                        value={about}
                        onChange={(e) => {
                          setAbout(e.target.value);
                        }}
                      ></textarea>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text-alt">gender</span>
                      </div>
                      <select
                        className="select select-bordered"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option defaultValue={"choose gender"}>
                          choose gender
                        </option>
                        <option value={"male"}>male</option>
                        <option value={"female"}>female</option>
                        <option value={"other"}>other</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text">photoUrl</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <input
                        className="grow"
                        value={photoUrl}
                        onChange={(e) => {
                          setPhotoUrl(e.target.value);
                        }}
                        // placeholder="Enter password"
                      />
                    </label>
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      editProfile(e);
                    }}
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
