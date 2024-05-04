import API from '../../api';
import Cookies from 'js-cookie';
export default function Task({ tasks, setTasks, selectedTask }) {
    function archiveTask() {
        const newList = tasks.map((task) => {
            if (task._id === selectedTask._id) {
                const updatedTask = {
                    ...task,
                    archived: !task.archived,
                };
                return updatedTask;
            }
            return task;
        });
        setTasks(newList);
        const updateTask = async (task) => {
            API.put(`tasks/${task._id}`, { archived: !task.archived }, { headers: { 'Authorization': 'Bearer ' + Cookies.get('token') } })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
        updateTask(selectedTask)
    }

    function deleteTask() {
        setTasks(oldTasks => {
            return oldTasks.filter(task => task._id !== selectedTask._id)
        })
        const deleteData = async (task) => {
            console.log(task._id);
            API.delete(`tasks/${task._id}`, { headers: { 'Authorization': 'Bearer ' + Cookies.get('token') } })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
        deleteData(selectedTask);
    }
    return (

        <li>
            <button onClick={deleteTask}>-</button>
            <input type="checkbox" name="task" id={selectedTask._id} onChange={archiveTask} />
            <label for={selectedTask.id}>{selectedTask.name}</label>
        </li>
    )
}