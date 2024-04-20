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

    function handleChange(id) {
        const newList = tasks.map((task) => {
            if (task.id === id) {
                const updatedTask = {
                    ...task,
                    archived: !task.archived,
                };
                return updatedTask;
            }
            return task;
        });
        setTasks(newList);
    }
    return (
        <>
            <h2>Welcome to the Home Page 🙋</h2>
            <ul style={{ listStyle: 'none' }}>
                {tasks.map((task, index) => (
                    !task.archived && <Task key={index} value={task.name} onChange={e => handleChange(task.id)} />
                ))}
            </ul>
            <Input tasks={tasks} setTasks={setTasks} />
        </>
    )
}