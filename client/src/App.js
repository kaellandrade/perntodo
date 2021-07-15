import React, { Fragment } from 'react'
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';


function App() {
  return (
    <Fragment>
      <div className="container">
        <div className='row'>

          <div className='col-md-6 mt-5'>
            <InputTodo />
          </div>
          <div className='col-md-6 mt-5'>
            <ListTodos />
          </div>


        </div>
      </div>
    </Fragment>
  );
}

export default App;
