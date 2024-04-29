import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'

const AuthRoute = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/auth/verify', {}, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('token')}`
                    }
                });
                if (response.status === 200) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                setIsLoggedIn(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkToken();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
};

export default AuthRoute;
