import React, { Fragment, useEffect, useState } from 'react';
const URL = 'http://localhost:5000/todos';

const dateRegx = /(\d{4})-(\d{1,2})-(\d{1,2})/




const renderRows = (todos, deleteTodos) => {

    return (
        todos.map((todo, index) => {
            const { description,todo_id } = todo;
            const [_, year, month, day] = todo.criadoem.match(dateRegx);
            
            return (
                <tr key={todo_id}>
                    <th scope="row">{index+1}</th>
                    <td>{description}</td>
                    <td>{`${day}-${month}-${year}`}</td>
                    <td> <button onClick={_ => { console.log(todo_id) }} className='btn btn-warning'>Edit</button> </td>
                    <td> <button onClick={_ => { deleteTodos(todo_id) }} className='btn btn-danger'>Delete</button> </td>
                </tr>
            )
        }
        )
    )
}


const ListTodos = props => {

    const [todos, setTodos] = useState([]);

    /**
     * Deleta um todo;
     */
    const deleteTodos = async (todo_id) => {
        try {
            const response = await fetch(`${URL}/${todo_id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'aplication/json' }
            });
            const jsonData = await response.json();
            // console.log(jsonData);
            getTodo();
        } catch (error) {
            console.error(error.message);
        }

    }


    /**
     * Recupera todos os todos
     */
    const getTodo = async () => {
        try {
            // Por padrão será feito um GET
            const response = await fetch(URL);
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(_ => {
        getTodo();
    }, []);

    return (
        <Fragment>
            <h1>Todos List</h1>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows(todos, deleteTodos)}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodos;