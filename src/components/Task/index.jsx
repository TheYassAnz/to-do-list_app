export default function Task({ value, onChange }) {
    return (

        <li>
            <input type="checkbox" name="task" onChange={onChange} />
            <label for="task">{value}</label>
        </li>
    )
}