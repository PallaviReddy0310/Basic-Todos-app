import React from 'react';
import './todosList.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './todosList.css';
import {IoAddSharp} from 'react-icons/io5';

function TodosList(props) {

  // useForm 
  let {register,handleSubmit,formState:{errors}}=useForm();

  //form submission
  let submitForm=(todos)=>{
    axios.post("http://localhost:4000/todos",todos)
    .then(response=>{
      if(response.status===201){
      console.log(response)}
    })
    .catch(error=>console.error(error))
  }

  return (
    <div className='container-fluid mx-3'>
      <p className='fs-5 mt-3 display-6' id='head'>Task List</p>
      <div className='row'>
        <div className='col col-11 col-sm-8 col-md-6'>
      <form onSubmit={handleSubmit(submitForm)} id='form'>
        <div>
        <label>Task</ label>
        <input type='text' placeholder='Workout' className='task form-control mb-2' {...register('task',{required:true,minLength:'4',maxLength:'15'})} />
        {errors.task?.type==="required" && <p className='text-danger'>* Task is mandatory</p>}
        {errors.task?.type==="minLength" && <p className='text-danger'>* Min Length is 4</p>}
        {errors.task?.type==="maxLength" && <p className='text-danger'>* Max Length is 15</p>}
        </div>
        <div>
        <label >Start Time</label>
        <input type='time'  className='stime form-select mb-2' {...register('startTime',{required:true})}/>
        {errors.startTime?.type==="required" && <p className='text-danger'>*Start time is mandatory</p>}
        </div>
        <div>
        <label>End Time</label>
        <input type='time'  className='etime form-select mb-2' {...register('endTime',{required:true})}/>
        {errors.endTime?.type==="required" && <p className='text-danger'>*End time is mandatory</p>}
        </div>
        <div>
        <label>Category</label>
        <select className='category form-select mb-2' defaultValue={"Personal"} {...register('category',{required:true})} >
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Family">Family</option>
        {errors.category?.type==="required" && <p className='text-danger'>*Category is mandatory</p>}
        </select>
        </div>
        <div>
        <label>Status</label>
        <select {...register('status',{required:true})} className='status form-select mb-3' id='status' defaultValue={'Not Mentioned'}>
          <option value='Not Mentioned' disabled>Status of the task..?</option>
          <option value='Completed'>Completed</option>
          <option value='Pending'>Pending</option>
          <option value='Not Yet Started'>Not Yet Started</option>
        {errors.status?.type==="required" && <p className='text-danger'>*Status is mandatory</p>}
        </select>
        </div>
        <button type='submit' id='btn' className='btn btn-success float-end fs-5 h-50 mb-3'><span><IoAddSharp /></span></button>
      </form>    
      </div>
      </div>
     </div>
  )
}

export default TodosList;