import axios from "axios";

export default function Register() {
    const handleSubmit = (e) => {
        // Prevent the default form submission
        e.preventDefault();
        // Get the form data
        const formData = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            admin: false
        };
        console.log(formData);

        // Send the form data to the server
        axios.post('http://localhost:8000/api/auth/signup', formData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <fieldset>
                    <legend>Register</legend>
                    <input type="text" name="firstname" id="firstname" placeholder="Firstname" /><br />
                    <input type="text" name="lastname" id="lastname" placeholder="Lastname" /><br />
                    <input type="email" name="email" id="email" placeholder="Email" /><br />
                    <input type="password" name="password" id="password" placeholder="Password" /><br />
                    <input type="submit" value="Register" />
                </fieldset>
            </form>
        </>
    )
}