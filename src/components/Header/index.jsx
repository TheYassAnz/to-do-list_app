import { Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <h1>To-Do-List</h1>
            </header>
            <Outlet />
        </>
    )
}