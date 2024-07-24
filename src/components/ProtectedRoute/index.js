import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({element: Component, ...rest}) => {
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <Navigate to='/login' replace />
    }
    return <Outlet {...rest}/>
}

export default ProtectedRoute