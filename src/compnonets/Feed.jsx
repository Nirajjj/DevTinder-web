import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { Navigate } from "react-router-dom";
import Card from "./Card";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const postFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data.feedCards));
    } catch (error) {
      // if (error?.response?.status === 401) {
      // }
      Navigate("/login");
      // console.error(error);
    }
  };
  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   await
  //   // };
  //   // fetchData();
  // }, []);
  postFeed();
  if (!feed || feed?.length <= 0) {
    return (
      <h2 className="font-semibold text-lg text-center h-screen">No feed</h2>
    );
  }
  return (
    <div className=" py-7 flex justify-center items-center h-screen">
      <Card user={feed[0]} />
    </div>
  );
  // :
  // (
  //   <div>no feed</div>
  // );
};

export default Feed;
