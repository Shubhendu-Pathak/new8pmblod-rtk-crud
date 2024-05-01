import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { updateUser } from '../store-rtk/thunk/fetchUsers';

function Update() {

    let [single,setSingle] = useState({})


    let handleChange = (e)=>{
        setSingle({...single,[e.target.name]:e.target.value})
      }

 
      let dispatch = useDispatch()

      let handleSubmit = (e)=>{
        e.preventDefault()
     if(single){
      dispatch(updateUser(single))
     }
      }

      //bring all dat from redux store
let allusers = useSelector(state=>state.usersData?.data)
console.log(allusers);

// get id from navigating
    let {state:{userid}} = useLocation()
    console.log(userid);

    //run useffect to find single user 
    useEffect(()=>{
        let singleuser = allusers.find(ele=>ele.id==userid)
        console.log(singleuser);
        setSingle(singleuser)
    },[userid])

  return (
    <div className="">
    <h2>UPDATE DATA</h2>
    <hr />
       <div className='border border-3 p-2 w-75 m-auto my-2 rounded-2 '>
        <form onSubmit={handleSubmit}>
        <Form.Control 
        type="text" 
        placeholder="FirstName"
        name='firstName'
        value={single && single.firstName}
     onChange={handleChange}
        />
           <Form.Control 
        type="text" 
        placeholder="LastName"
        name='lastName'
        value={single && single.lastName}
        onChange={handleChange}
        />
           <Form.Control 
        type="text" 
        placeholder="Enter Image Link"
        name='image'
        value={single && single.image}
        onChange={handleChange}
        />
           <Form.Control 
        type="email" 
        placeholder="UserEmail"
        name='email'
        value={single && single.email}
        onChange={handleChange}
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
  value={single && single.description}
  onChange={handleChange}
 
   id="" 
   cols="60" 
   rows="5"></textarea>
        </div>
        <Button 
       
        className='d-block w-100 my-3' variant="success" type="submit">
          Submit
        </Button>
        
        </form>
        </div>
   </div>
  )
}

export default Update