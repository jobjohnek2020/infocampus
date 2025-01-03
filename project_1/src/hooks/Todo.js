import {useState,useEffect} from 'react';

const Todo = () => {
    const[todos,setTodos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(list => {
            setTodos(list)
        })
    },[]);
    return(
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Todo</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map(todo=>(
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "Completed" : "Incomplete"}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default Todo;