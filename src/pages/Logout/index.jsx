const Cookies = require('js-cookie');
export default function Logout() {
    Cookies.remove('token');
    return (
        <h1>Logout</h1>
    )
}