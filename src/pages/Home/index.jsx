import Task from '../../components/Task';
import Input from '../../components/Input';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            //   setLoading(true);
            try {
                const { data: response } = await axios.get('http://localhost:8000/api/tasks');
                setTasks(response);
            } catch (error) {
                console.error(error.message);
            }
            // setLoading(false);
        }

        fetchData();
    }, []);

    function handleChange(checkedTask) {
        const newList = tasks.map((task) => {
            if (task.id === checkedTask.id) {
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
            axios.put(`http://localhost:8000/api/tasks/${task.id}`, { archived: !task.archived })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
        updateTask(checkedTask)

    }
    return (
        <>
            <h2>Welcome to the Home Page 🙋</h2>
            <h3>Current Tasks</h3>
            <ul style={{ listStyle: 'none' }}>
                {tasks.map((task, index) => (
                    !task.archived && <Task key={index} uniqueIdentifier={'task' + task.id} value={task.name} onChange={e => handleChange(task)} />
                ))}
            </ul>
            <details>
                <summary style={{ fontSize: 'large' }}>Archived Tasks</summary>
                <ul style={{ listStyle: 'none' }}>
                    {tasks.map((task, index) => (
                        task.archived && <Task key={index} uniqueIdentifier={'task' + task.id} value={task.name} onChange={e => handleChange(task)} />
                    ))}
                </ul>
            </details><br />
            <Input tasks={tasks} setTasks={setTasks} />
        </>
    )
}