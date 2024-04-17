export default function Task({ value, onChange }) {

    function handleChange(event) {
        console.log(event.target.name)
    }

    return (

        <li>
            <input type="checkbox" name="task" onChange={onChange} />
            <label for="task">{value}</label>
        </li>
    )
}