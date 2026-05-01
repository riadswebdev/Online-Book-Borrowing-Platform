import React from "react";
import ProfilePage from "./profile/page";
import Navbar from "@/components/navbar/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AuthLayout;
