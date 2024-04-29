import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Header() {
    const navigate = useNavigate()
    const [logout, setLogout] = useState(false);
    useEffect(() => {
        if (logout) {
            Cookies.remove('token');
            navigate('/login');
        }
    }, [logout])
    return (
        <>
            <header>
                <h1>To-Do-List</h1>
                <Link to='/home'>Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link onClick={() => { setLogout(true) }}>Logout</Link>
            </header>
            <Outlet />
        </>
    )
}