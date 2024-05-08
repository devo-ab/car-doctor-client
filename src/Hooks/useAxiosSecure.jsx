import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-eight-sooty.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error track in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 401) {
          console.log("logout the user");
          signOutUser()
            .then(() => {
                navigate('/signin')
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
