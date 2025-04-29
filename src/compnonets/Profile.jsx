import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Profile = () => {
  const user = useSelector((store) => store.user);

  // const {firstName, lastName, age, about, photoUrl, gender} = user.data

  // if (!user) return;
  const [firstName, setfirstName] = useState(user?.firstName || "");
  const [lastName, setlastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [about, setAbout] = useState(user?.about || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [gender, setGender] = useState(user?.gender || "");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);
  useEffect(() => {
    if (user) {
      setfirstName(user?.firstName);
      setlastName(user?.lastName);
      setAge(user?.age);
      setAbout(user?.about);
      setPhotoUrl(user?.photoUrl);
      setGender(user?.gender);
    }
  }, [user]);
  if (!user) return <div>Loading...</div>;

  console.log(toast);

  const editProfile = async (e) => {
    setError("");
    e.preventDefault();
    try {
      const updatedUser = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true }
      );
      console.log(updatedUser);

      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);
      dispatch(addUser(updatedUser.data.data));
    } catch (error) {
      console.error(
        error.response?.data || error.message || "An error occurred"
      );
      setError(error.response?.data || error.message || "An error occurred");
    }
  };
  return (
    user && (
      <div className="flex flex-grow-0 items-center justify-center gap-7 min-h-screen flex-wrap">
        <Card user={{ firstName, lastName, age, about, photoUrl, gender }} />
        <div className="bg-base-200  flex items-center justify-center w-full lg:w-1/2">
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
                        <option defaultValue={"choose gender"} disabled>
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
                {toast && (
                  <div className="toast toast-top toast-center">
                    <div className="alert alert-success flex justify-center items-center">
                      <span className=" font-medium">
                        profile saved successfully
                      </span>
                    </div>
                  </div>
                )}
                <div className="form-control mt-6">
                  <p className=" text-red-500">{error}</p>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      // e.preventDefault();
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
