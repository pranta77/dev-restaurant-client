import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSIgnIn = () => {
    googleSignIn().then((result) => {
      // console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        // console.log(res);
        navigate("/");
      });
    });
  };
  return (
    <div className="mx-auto my-4">
      <div className="divider divider-info"></div>
      <div>
        <button onClick={handleGoogleSIgnIn} className="btn">
          GOOGLE
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
