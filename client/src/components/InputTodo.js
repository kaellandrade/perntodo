import React, { Fragment, useState } from 'react';

const InputTodo = props => {
    const [description, setDescription] = useState("");

    /**
     * Função responsável por enviar o fomulário;
     */
    const onSubmitForm = async e => {
        e.preventDefault(); // Evita o comportamento padrão do objeto
        try {
            const body = { description };
            const response = await fetch("http://10.0.0.113:5000/todos", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = '/';
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <Fragment>
            <h1 className='text-center'>Input Todo</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className='form-control'
                    onChange={e => setDescription(e.target.value)}
                    value={description} />
                <button className='btn btn-success'>Add</button>
            </form>

        </Fragment>
    );
}

export default InputTodo;