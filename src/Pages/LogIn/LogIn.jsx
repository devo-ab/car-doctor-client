import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const LogIn = () => {
  const { signInWithEmailPass } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailPass(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <div>
          <img
            className="w-3/4 border-2 border-dashed border-[#D0D0D0] mx-auto"
            src={login}
            alt=""
          />
        </div>

        <div className="w-full max-w-md p-10 space-y-3 rounded-xl border-2 border-[#D0D0D0]">
          <h1 className="text-[#444444] text-3xl text-center md:text-[40px] font-semibold">
            SignIn
          </h1>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-[#444444] text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md border-2 border-[#E8E8E8]"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-[#444444] text-lg font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-md border-2 border-[#E8E8E8]"
              />
              <div className="flex justify-end">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full btn btn-ghost text-white text-lg font-semibold bg-[#FF3811]"
            >
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 "></div>
            <p className="px-3 text-[#444444] font-medium">Or Sign In with</p>
            <div className="flex-1 h-px sm:w-16 "></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Log in with Facebook"
              className="btn text-[#3B5998] rounded-full bg-[#F5F5F8] text-lg"
            >
              <FaFacebookF />
            </button>
            <button
              aria-label="Log in with LinkedIn"
              className="btn text-[#0A66C2] rounded-full bg-[#F5F5F8] text-lg"
            >
              <FaLinkedinIn />
            </button>
            <button
              aria-label="Log in with Google"
              className="btn rounded-full bg-[#F5F5F8] text-lg"
            >
              <FcGoogle />
            </button>
          </div>
          <p className="text-[#737373] text-center sm:px-6 ">
            Haven't an account?
            <Link
              to="/signup"
              rel="noopener noreferrer"
              href="#"
              className="text-[#FF3811] font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
