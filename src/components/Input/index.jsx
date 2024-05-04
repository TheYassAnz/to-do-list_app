import React, { useState } from 'react';
import API from '../../api'
import Cookies from 'js-cookie'

export default function Input({ newTask, setNewTask }) {
    function handleSubmit(event) {
        event.preventDefault();
        if (text !== '') {
            setText(''); // Clear the input field
            const postData = async () => {
                API.post('tasks', { name: text, archived: false }, { headers: { 'Authorization': 'Bearer ' + Cookies.get('token') } })
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error.response))
            }
            postData();
            setNewTask(true);
        }
    }
    const [text, setText] = useState('');
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="task-input" value={text} onChange={e => setText(e.target.value)} />
                <input type="submit" value="Add Task" />
            </form>
        </>
    )
}