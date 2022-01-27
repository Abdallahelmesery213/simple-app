import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice';
import "./Form.css";

const Form = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(addUser({name, email}));
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <div>
            <input 
                type='text' 
                placeholder='Enter Name' 
                className='form-control' 
                onChange={(e)=> setName(e.target.value)}
            />
        </div>
        <div>
            <input 
                type='email' 
                placeholder='Enter email' 
                className='form-control' 
                onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div>
            <input type='submit' />
        </div>
    </form>
  );
};

export default Form;
