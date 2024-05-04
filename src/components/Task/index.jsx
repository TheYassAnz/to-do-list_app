import API from '../../api';
import Cookies from 'js-cookie';
export default function Task({ newTask, setNewTask, selectedTask }) {
    function archiveTask() {
        const updateTask = async (task) => {
            API.put(`tasks/${task._id}`, { archived: !task.archived }, { headers: { 'Authorization': 'Bearer ' + Cookies.get('token') } })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
        updateTask(selectedTask)
        setNewTask(true);
    }

    function deleteTask() {
        const deleteData = async (task) => {
            console.log(task._id);
            API.delete(`tasks/${task._id}`, { headers: { 'Authorization': 'Bearer ' + Cookies.get('token') } })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
        deleteData(selectedTask);
        setNewTask(true)
    }
    return (

        <li>
            <button onClick={deleteTask}>-</button>
            <input type="checkbox" name="task" id={selectedTask._id} onChange={archiveTask} />
            <label htmlFor={selectedTask.id}>{selectedTask.name}</label>
        </li>
    )
}