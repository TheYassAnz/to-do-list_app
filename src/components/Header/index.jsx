import { Link, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Header() {
    const navigate = useNavigate()
    const handleLogout = (e) => {
        Cookies.remove('token');
        navigate('/login', { replace: true })
    }
    return (
        <>
            <header>
                <h1>To-Do-List</h1>
                <Link to='/home'>Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link onClick={(e) => { handleLogout(e) }} to='/login'>Logout</Link>
            </header>
            <Outlet />
        </>
    )
}