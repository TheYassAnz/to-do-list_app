import API from '../../api';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Send the form data to the server
        const checkUser = async () => {
            API.post('auth/login', { email, password })
                .then(response => {
                    Cookies.set('token', response.data.token, { sameSite: 'strict', secure: true });
                    navigate('/home', { replace: true })
                })
                .catch(error => {
                    console.error(error);
                });
        }
        checkUser();

    }
    return (
        <>
            <form onSubmit={e => onSubmit(e)}>
                <fieldset>
                    <legend>Login</legend>
                    <input type="email" name="email" id="email" /><br />
                    <input type="password" name="password" id="password" /><br />
                    <input type="submit" value="Login" />
                </fieldset>
            </form>
        </>
    )
}