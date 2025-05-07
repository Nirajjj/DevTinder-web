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
    <div className="bg-zinc-900 text-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden w-full xs:w-[90%] sm:w-[48%] md:w-[35%] lg:w-[25%] xl:w-[23%]">
      <div className="overflow-hidden group h-60">
        <img
          src={photoUrl || DEFAULT_AVATAR}
          alt={`${firstName}'s avatar`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-white">{`${firstName || ""} ${
          lastName || ""
        }`}</h2>
        {age && gender && (
          <p className="text-gray-400 text-sm">{`${age || ""} | ${
            gender || ""
          }`}</p>
        )}
        {about && (
          <p className="text-gray-400 text-sm line-clamp-3">{about || ""}</p>
        )}

        <div className="flex justify-between mt-4 gap-2">
          <button
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-red-400 border border-red-400 hover:bg-red-500 hover:text-white transition-colors"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="w-full px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500 transition-colors"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
