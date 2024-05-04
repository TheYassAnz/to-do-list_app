import Task from '../../components/Task';
import Input from '../../components/Input';
import { useState, useEffect } from 'react';
import API from '../../api'
import Cookies from 'js-cookie'

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        console.log('test')
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const { data: response } = await API.get('tasks', { headers: { 'Authorization': 'Bearer ' + Cookies.get('token') } })
                setTasks(response);
            } catch (error) {
                console.error(error);
            }
        }
        setNewTask(false);
        setIsLoading(false);
        fetchData();

    }, [newTask]);

    if (isLoading) {
        return (<div>Loading...</div>)
    }
    return (
        <>
            <h2>Welcome to the Home Page 🙋</h2>
            <h3>Current Tasks</h3>
            <ul style={{ listStyle: 'none' }}>
                {tasks.map((task, index) => (
                    !task.archived && <Task key={`${index}-${task._id}`} setNewTask={setNewTask} newTask={newTask} selectedTask={task} />
                ))}
            </ul>
            <details>
                <summary style={{ fontSize: 'large' }}>Archived Tasks</summary>
                <ul style={{ listStyle: 'none' }}>
                    {tasks.map((task, index) => (
                        task.archived && <Task key={`${index}-${task._id}`} setNewTask={setNewTask} newTask={newTask} selectedTask={task} />
                    ))}
                </ul>
            </details><br />
            <Input setNewTask={setNewTask} newTask={newTask} />
        </>
    )
}