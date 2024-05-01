import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../store-rtk/thunk/fetchUsers'
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';
import Preview from './Preview';
import { Form } from 'react-bootstrap';

function AllData() {

    let [show,setShow] = useState(false)
    let [prevdata,setPrevData] = useState(null)
// radio filter
    let[radioData,setRadioData] = useState('')


    let {isLoading,data,error,searchData} = useSelector(state=>state.usersData)
    // console.log(userdata);

    let navigate = useNavigate()
let dispatch = useDispatch()

useEffect(()=>{
dispatch(showUser())
},[])

let onDelete =(para)=>{
console.log(para);
dispatch(deleteUser(para))
}

let onUpdate = (id) =>{
console.log(id);
navigate(`/user/${id}`,{state:{userid:id}})
}

let onPreview =(para)=>{
    console.log(para);
    setShow(true)
    setPrevData(para)
}

  return (
    <div>

{
    show ? 
    <Preview prevdata={prevdata} setShow={setShow}/>
    :
    (
        <div>
   <h1>AllData</h1>
   <div className="d-flex justify-content-evenly w-50 m-auto border border-1 p-3 ">
   <Form.Check type='radio' label='ALL' name='gender' checked={radioData===''} value='' onChange={(e)=>setRadioData(e.target.value)}/>
   <Form.Check type='radio' label='MALE' name='gender' value='male' checked={radioData==='male'} onChange={(e)=>setRadioData(e.target.value)}/>
   <Form.Check type='radio' label='FEMALE' name='gender' value='female' checked={radioData==='female'} onChange={(e)=>setRadioData(e.target.value)}/>
   </div>

{
    data &&
    // search sort filter
    data
    .filter(ele=>{
        if(searchData.length===0){
            return ele
        }else{
            return ele.firstName.toLowerCase().includes(searchData.toLowerCase())
        }
    })
  //search sorting
// filter on basis of gender
.filter(ele=>{
    if(radioData==='male'){
        return ele.gender==='male'
    }else if(radioData==='female'){
        return ele.gender==='female'
    }else{
        return ele
    }
})

// filter on basis of gender
.map(ele=>(
        <div className='border border-2  p-3 my-3 w-50 m-auto rounded-4 ' key={ele.id}>
            <img className='d-block m-auto mb-3' height='100px' src={ele?.image} alt="" />
            <p className='fst-italic fs-2 text-center' >{ele?.firstName} - {ele?.lastName}</p>
            <h3 className='fs-4 mt-3'>Email = {ele?.email}</h3>
            <div className="btns d-flex justify-content-evenly my-3">
            <Button variant="primary" onClick={()=>onPreview(ele)} >Preview</Button>{' '}
            <Button variant="success" onClick={()=>onUpdate(ele.id)}>EDIT</Button>{' '}
            <Button
            onClick={()=>onDelete(ele)}
            variant="danger">Delete</Button>{' '}
            </div>
        </div>
    ))
}

        </div>
    )
}

     
    </div>
  )
}

export default AllData