import axios from "axios";
import React, { useEffect } from "react";
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

      dispatch(addFeed(res.data));
    } catch (error) {
      if (error?.response?.status === 401) {
        Navigate("/login");
      }
      console.error(error);
    }
  };
  useEffect(() => {
    // const fetchData = async () => {
    //   await
    postFeed();
    // };
    // fetchData();
  }, []);

  return feed ? (
    <div className=" py-7 flex justify-center items-center">
      <Card user={feed.feedCards[0]} />
    </div>
  ) : (
    <div>no feed</div>
  );
  // :
  // (
  //   <div>no feed</div>
  // );
};

export default Feed;
