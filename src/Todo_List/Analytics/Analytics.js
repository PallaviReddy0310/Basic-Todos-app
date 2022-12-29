import React from 'react';
import axios from 'axios';
import './Analytics.css';
import { useEffect,useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { Modal,Button, ModalBody } from 'react-bootstrap';

function Analytics() {

  {/* useState Effect */}
  let [todos,setTodos]=useState([]);
  let [err,setErr]= useState('');
  let [todoToEdit,setTodoToEdit]= useState({});

  {/* useForm method */}
  let {register,setValue,getValues}= useForm();

  //show modal
  let [show,setShow]=useState(false);
  let showModal=()=>setShow(true);
  let closeModal=()=>setShow(false);

  //fetching todos
  let getTodos=()=>{
    axios.get('http://localhost:4000/todos')
    .then(response=>{
      console.log(response)
      if(response.status===200)
        setTodos(response.data);
    })
    .catch(error=>{
      if(error.request){
        setErr(error.message);}
      else if(error.response){
          setErr(error.message);}
      else{
          setErr(error.message);}
    })
  }

  //Edit todo
  let editTodo=(todoObj)=>{
    showModal();
    setTodoToEdit(todoObj);
    setValue('task',todoObj.task);
    setValue('startTime',todoObj.startTime);
    setValue('endTime',todoObj.endTime);
    setValue('category',todoObj.category);
    setValue('status',todoObj.status);
  }

  //Save todo
  let saveTodo=()=>{
    closeModal();
    let modifiedTodo=getValues();
    modifiedTodo.id=todoToEdit.id;
    axios.put(`http://localhost:4000/todos/${modifiedTodo.id}`,modifiedTodo)
    .then(res=>{
      if(res.status===200){
        getTodos();
      }})
      .catch(error=>console.error(error))
  }

  //Delete todo
  let deleteTodo=(todoId)=>{
    let newTodos=todos.filter((todo)=>todo.id!==todoId);
    setTodos(newTodos);
  }


  {/* Fetching todos from local API  using useEffect */}
  useEffect(getTodos,[]);
  
  return(

    <div className='mx-auto text-center'>
      <div className='display-6 text-center mt-3' id='todoCount'>Todo Count : {todos.length}</div>
      <button data-bs-target='#showTodos' data-bs-toggle='collapse' className='btn btn-info mt-3 mb-3' id='dispTodo'>Show Todos</button>
      <div className='collapse' id='showTodos'>
        {err.length!==0 && <p className='display-4 text-danger'>{err}</p>}
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {
        todos.map((todo)=><div key={todo.id} className='col mx-auto'>
          <div className='card mb-4 px-2 py-2' id='card'>
            <div className='cardBody card-body text-center'>
          <p className='fs-5 bold'>{todo.id}. {todo.task}</p>
          <p className='fs-6'>Start Time : {todo.startTime}</p>
          <p className='fs-6'>End Time : {todo.endTime}</p>
          <p className='fs-6'>Category : {todo.category}</p>
          <p className='fs-6'>Status : {todo.status}</p>
          <button className='btn btn-secondary float-start' id='edit' onClick={()=>editTodo(todo)}>Edit</button>
          <button className='btn btn-danger float-end' id='del' onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </div>
          </div>
          </div>)}
      </div>

    {/* Modal */}
    <Modal show={show} onHide={closeModal} centered backdrop='static' >
      <Modal.Header>
        Edit Todos
      </Modal.Header>
      <Modal.Body>
      <form>
        <div>
        <label>Task</label>
        <input type='text' placeholder='Workout' className='task ms-auto form-control ' {...register('task')} />
        </div>
        <div>
        <label >Start Time</label>
        <input type='time'  className='stime form-select ' {...register('startTime')}/>
        </div>
        <div>
        <label>End Time</label>
        <input type='time'  className='etime form-select ' {...register('endTime')}/>
        </div>
        <div>
        <label>Category</label>
        <select className='category form-select ' defaultValue={"Personal"} {...register('category')} >
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Family">Family</option>
        </select>
        </div>
        <div>
        <label>Status</label>
        <select {...register('status')} className='status form-select' id='status' defaultValue={'Not Mentioned'}>
          <option value='Not Mentioned' disabled>Status of the task..?</option>
          <option value='Completed'>Completed</option>
          <option value='Pending'>Pending</option>
          <option value='Not Yet Started'>Not Yet Started</option>
        </select>
        </div>
      </form> 
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={saveTodo}>Save</Button>
      </Modal.Footer>
    </Modal>
    
    </div>
    </div>
  )
  
}

export default Analytics;