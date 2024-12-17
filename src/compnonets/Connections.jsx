import React, { useEffect } from "react";
import { BASE_URL, DEFAULT_AVATAR } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Connections = () => {
   const dispatch = useDispatch()
   const selector = useSelector(store => store.Connection)
  const fetchConnections = async () => {
   try {
      const res = axios.get(BASE_URL + "/user/connections", { withCredentials: true });
      // console.log(res.data);
      
      dispatch(res.data)
   } catch (error) {
      console.error(error)
   }
    useEffect(()=>{
      fetchConnections()
    }, [])
  };
  return (
    <>
      <h1>Connections</h1>
      <div className=" flex items-center p-7">
        <div>
          <img
            src={DEFAULT_AVATAR}
            alt="user photo"
            className=" w-20 rounded-full"
          />
        </div>
        <div>
          <h2>{"name"}</h2>
        </div>
      </div>
    </>
  );
};

export default Connections;
