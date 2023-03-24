import {useState, useEffect} from 'react'
import { useIntl } from 'react-intl';
import { KTSVG } from '../../../_metronic/helpers';
import { PageTitle } from '../../../_metronic/layout/core';
import { Dropdown1 } from '../../../_metronic/partials';


export default function TodoPage () {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/task/todos/')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to your API endpoint
    fetch('http://localhost:8000/task/todos/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })
      .then(response => response.json())
      .then(data => {
        // Add the new todo to the list of todos
        setTodos([data, ...todos]);
        // Clear the input fields
        setTitle('');
        setDescription('');
      })
      .catch(error => console.log(error));
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);

    fetch(`http://localhost:8000/task/todos/${id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todos.completed }),
    });
  };
  
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/task/todos/${id}/`, {
      method: 'DELETE',
    })
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.log(error));
  };


  const intl = useIntl()
  return (<>
    <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.TODO'})}</PageTitle>
    <div className={`card card-xl-stretch mb-5 mb-xl-8`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>Todo</h3>
        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
        </div>
      </div>

      <div className='card-body pt-2'>
        <div className='d-flex mb-3'>
          <span className='me-10'>Add new task:</span>
          <form onSubmit={handleSubmit}>
            <div className='d-flex'>
              <div>
                <input className="form-control border-0 p-0 pe-10 resize-none min-h-25px" rows="1" placeholder="Task title.." value={title} onChange={event => setTitle(event.target.value)}></input>
                <div className="separator mb-4"></div>
              </div>
              <div className='ms-10'>
                <input className="form-control border-0 p-0 pe-10 resize-none min-h-25px" rows="1" placeholder="Task description.." value={description} onChange={event => setDescription(event.target.value)}></input>
                <div className="separator mb-4"></div>
              </div>
              <div>
                <button type="submit" className='ms-4 badge badge-primary border-0 p-2'>Add Todo</button>
              </div>
            </div>
          </form>
        </div>
        
        {todos.map((todo, index) => (
          <div className='d-flex align-items-center mb-8' key={index}>
            <span className='bullet bullet-vertical h-40px bg-success'></span>
            <div className='form-check form-check-custom form-check-solid mx-5'>
              <input className='form-check-input' type='checkbox' value='' id={todo.key} onChange={() => handleToggle(todo.id)} checked={todo.completed ? true : false}/>
            </div>
            <div className='flex-grow-1'>
              <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6 mt-1'>
                {todo.title}
              </a>
              {todo.completed ? <span className='badge badge-light-success fw-bolder ms-2'>Completed</span> : <span className='badge badge-light-danger fw-bolder ms-2'>Incompleted</span>}
              
              <span className='text-muted fw-bold d-block'>{todo.description}</span>
            </div>
            <span onClick={() => handleDelete(todo.id)} className='btn btn-icon btn-light btn-sm border-0'>
                <KTSVG
                  path='/media/icons/duotune/general/gen027.svg'
                  className='svg-icon-2 svg-icon-danger'
                />
            </span>
          </div>
        ))}
      </div>
    </div>
    {/* <div className='p-4'>
      <div className='card p-4'>
        <form onSubmit={handleSubmit}>
          <div className='d-flex'>
            <div>
              <label className='d-flex'>
                <div className='me-4 mt-1'>Title:</div> 
                <input type="text" value={title} onChange={event => setTitle(event.target.value)} className='form-control' />
              </label>
            </div>
            
            <div>
              <label className='d-flex'>
                <div className='me-4 ms-4 mt-1'>Description:</div> 
                <input type="text" value={description} onChange={event => setDescription(event.target.value)} className='form-control' />
              </label>
            </div>
            <button type="submit" className='btn btn-primary btn-sm ms-4'>Add Todo</button>
          </div>
        </form>
        <div>
          <h5 className='pt-3 pb-3'>Task list</h5>
          <table className="table">
            <tbody>
              {todos.map((todo, index) => (
              <tr key={index}>
                <th scope="row" key={index} style={{width: '50px'}}>
                  <input type='checkbox' className='checkbox mt-2' style={{width: '24px', height: '24px'}} id={todo.key} onChange={() => handleToggle(todo.id)} checked={todo.completed ? true : false}/>
                </th>
                <td>
                  <span className='h5'>{todo.title} {todo.id}</span>{todo.completed ? <div bg="success" className='ms-2'>Completed</div> : <div bg="danger" className='ms-2'>Incompleted</div>}
                  <br/>
                  <span className='text-muted'>{todo.description}</span>
                </td>
                <td>
                  <div className='float-end'>
                    <button onClick={() => handleToggle(todo.id)} className='btn btn-success btn-sm'>C</button>
                    <button onClick={() => handleDelete(todo.id)} className='btn btn-danger btn-sm ms-2'>Delete</button>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div> */}
    </>
  )
}
