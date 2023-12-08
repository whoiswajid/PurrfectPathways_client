import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;