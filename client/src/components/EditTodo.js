import React, { Fragment, useState } from 'react';
const URL = 'http://10.0.0.113:5000/todos';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`${URL}/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)

            });
            console.log(response);
            window.location = '/';
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <button onClick={_ => setDescription(todo.description)} type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            <div onClick={_ => setDescription(todo.description)} className="modal fade" id={`id${todo.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input value={description}
                                    className="form-control"
                                    id="floatingTextarea"
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={e => updateDescription(e)} type="button" className="btn btn-warning">Update</button>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
}

export default EditTodo;