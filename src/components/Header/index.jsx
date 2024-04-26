import { Link, Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <h1>To-Do-List</h1>
                <Link to='/home'>Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to='/logout'>Logout</Link>
            </header>
            <Outlet />
        </>
    )
}