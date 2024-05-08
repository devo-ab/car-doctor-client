import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-dots loading-lg text-center justify-center items-center mx-auto"></span>;
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
  };

export default PrivateRoutes;