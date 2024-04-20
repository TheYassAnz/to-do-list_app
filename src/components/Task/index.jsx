export default function Task({ value, onChange, uniqueIdentifier }) {
    return (

        <li>
            <input type="checkbox" name="task" id={uniqueIdentifier} onChange={onChange} />
            <label for={uniqueIdentifier}>{value}</label>
        </li>
    )
}