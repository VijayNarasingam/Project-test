import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {v4 as uuid} from "uuid";
import axios from 'axios';


function Create() {
    
    const [name,setName] =useState()
    const [email,setEmail] =useState()
    const [mobile,setMobile] =useState()
    const [designation,setDesignation] =useState()
    const [gender,setGender] =useState()
    const [course,setCourse] =useState()
    const [image,setImage] =useState()


    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/User/',{image, name, email, mobile, designation, gender, course})
        .then(result => {
            console.log(result)
            navigate('/user')
        })
        .catch(err => console.log(err))

    }

   


  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"  >
            <img className='m-0' src="../src/assets/DealsDray(1).png" alt="" />
                <form onSubmit={handleSubmit} >
                    <h2>Add User</h2>
            
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' className='form-control'
                        onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Mobile No</label>
                        <input type="text" placeholder='Enter Mobile no' className='form-control'
                        onChange={(e)=> setMobile(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Designation</label>
                        <select type="text" placeholder='Enter Email' className='form-control'
                        onChange={(e)=> setDesignation(e.target.value)}>
                            <option value="Designation">Select Designation</option>
                                        <option value="HR">HR</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Sales">Sales</option>
                        </select>
                    </div>
                    <div >
                        <label htmlFor="">Gender</label> &nbsp;
                                <input checked={gender==='male'} onChange={e=>setGender(e.target.value)}  value='male' type='radio' name='Gender'/>&nbsp;
                                <label>Male</label>&nbsp;
                                <input checked={gender==='female'} onChange={e=>setGender(e.target.value)}  value='female' type='radio' name='Gender'/>&nbsp;
                                <label>Female</label>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Course</label> &nbsp;
                        &nbsp;<input onSelect={course==='MCA'} onChange={e=>setCourse(e.target.value)}  type='checkbox' name='Course[]' value="MCA"/> &nbsp;MCA
                           &nbsp;   <input onSelect={course==='BCA'} onChange={e=>setCourse(e.target.value)}  type='checkbox' name='Course[]' value="BCA"/> &nbsp;BCA
                           &nbsp;      <input onSelect={course==='BSC'} onChange={e=>setCourse(e.target.value)}  type='checkbox' name='Course[]' value="BSC"/> &nbsp;BSC
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Image Upload</label>
                        <input  value={image} onChange={e=>setImage(e.target.value)} className='form-control' type="file" accept='image/*' />
                    </div>
                    <button className='btn btn-success' >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Create;
