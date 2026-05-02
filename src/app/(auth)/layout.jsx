import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "react-hot-toast";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Toaster/>
    </>
  );
};

export default AuthLayout;
