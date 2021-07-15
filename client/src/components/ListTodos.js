import React, { Fragment, useEffect, useState } from 'react';
const dateRegx = /(\d{4})-(\d{1,2})-(\d{1,2})/

const renderRows = (todos) => {

    return (
        todos.map((todo, index) => {
            const [_, year, month, day] = todo.criadoem.match(dateRegx);
            return (
                <tr>
                    <th scope="row">{index}</th>
                    <td>{todo.description}</td>
                    <td>{`${day}-${month}-${year}`}</td>
                    <td> <button className='btn btn-warning'>Edit</button> </td>
                    <td> <button className='btn btn-danger'>Delete</button> </td>
                </tr>
            )
        }
        )
    )
}



const ListTodos = props => {

    const [todos, setTodos] = useState([]);

    const getTodo = async () => {
        try {
            // Por padrão será feito um GET
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(_ => {
        getTodo();
    }, []);
    console.log(todos);
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
                    {renderRows(todos)}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodos;