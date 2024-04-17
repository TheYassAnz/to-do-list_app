import Task from '../../components/Task';
import Input from '../../components/Input';
import { useState } from 'react';

export default function Home() {
    const [tasks, setTasks] = useState([]);

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