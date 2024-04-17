import React, { useState } from 'react';

export default function Input({ tasks, setTasks }) {
    const [text, setText] = useState('');
    return (

        <>

            <input type="text" name="task-input" value={text} onChange={e => setText(e.target.value)} />
            <button type="submit" onClick={() => {
                if (text !== '') {
                    setText('')
                    setTasks([{
                        id: tasks.length,
                        name: text,
                        archived: false,
                    }, ...tasks])
                }
            }}>Add Task</button>
        </>
    )
}