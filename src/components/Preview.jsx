import React from 'react'
import { LuDelete } from "react-icons/lu";

function Preview({prevdata,setShow}) {
  return (
    <div className='m-3'>
      <div className="d-flex justify-content-between ">
      <h2>{prevdata.firstName} {prevdata.lastName}</h2>
  <h1>
  <LuDelete onClick={()=>setShow(false)} />
  </h1>

      </div>

<img src={prevdata?.image} alt="" />

<p>{prevdata?.description}</p>

<h1>DATED = {prevdata?.birthDate}</h1>

    </div>
  )
}

export default Preview