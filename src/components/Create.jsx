import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createUser } from '../store-rtk/thunk/fetchUsers'

function Create() {

let [state,setState] = useState(
  {firstName:'FN',lastName:'LN',gender:'male',email:'er@test.com',image:'https://cdn-icons-png.flaticon.com/256/4193/4193256.png',description:''}
  )

let dispatch = useDispatch()

let handleChange = (e)=>{
  setState({...state,[e.target.name]:e.target.value})
}

let handleSubmit = (e)=>{
  e.preventDefault()
  console.log(state);
  dispatch(createUser(state))
}

  return (
 <div className="">
  <h2>CREATE</h2>
  <hr />
     <div className='border border-3 p-2 w-75 m-auto my-2 rounded-2 '>
      <form onSubmit={handleSubmit}>
      <Form.Control 
      type="text" 
      placeholder="FirstName"
      name='firstName'
      value={state.firstName}
      onChange={handleChange}
      />
         <Form.Control 
      type="text" 
      placeholder="LastName"
      name='lastName'
      value={state.lastName}
      onChange={handleChange}
      />
         <Form.Control 
      type="text" 
      placeholder="Enter Image Link"
      name='image'
      value={state.image}
      onChange={handleChange}
      />
         <Form.Control 
      type="email" 
      placeholder="UserEmail"
      name='email'
      onChange={handleChange}
      value={state.email}
      />
      <div className="my-2 ">
<h6>GENDER</h6>
<label htmlFor="" className='mx-2'>MALE  </label>
<input 
type="radio" 
name="gender"  
value='male'
onChange={handleChange}
/>

<label className='ms-4 me-2' htmlFor="">Female</label>
<input 
type="radio" 
name="gender"  
value='female'
onChange={handleChange}
/>
<br /><br />
<label htmlFor="">Description</label>
<textarea placeholder='Description' 
className='d-block'
name="description"
value={state.description}
onChange={handleChange}
 id="" 
 cols="60" 
 rows="5"></textarea>
      </div>
      <Button className='d-block w-100 my-3' variant="success" type="submit">
        Submit
      </Button>
      
      </form>
      </div>
 </div>
  )
}

export default Create