import React, { useEffect, useState } from "react";
import Navbar from "../compnonets/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../compnonets/Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const LoginUser = useSelector((store) => store.user);
  const getLoginUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data.data));
    } catch (error) {
      // if (error?.response?.status === 401) {
      // }
      navigate("/login");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!LoginUser) {
      getLoginUser();
    }
  }, []);

  if (loading) {
    // Show loading indicator while checking authentication
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <Navbar />
      </header>

      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Body;
