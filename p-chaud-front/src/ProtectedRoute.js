import React from 'react';
import { useUser } from './contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children, protectedFrom }) => {
    const { user } = useUser();
    const location = useLocation();

    if (protectedFrom === "user" && user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    else if (protectedFrom === "nonUser" && !user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};
