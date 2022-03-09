import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom';
function PrivateRouter() {
    const { currUser } = useContext(AuthContext);
    return currUser ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter