import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './style.css'

function Update() {
    const {id} = useParams();
    const [values,setValues] =useState({
        name:' ',
        email:' ',
        mobile:' ',
        designation:' ',
        gender:' ',
        course:' ',
        image:' '
    });



    useEffect(()=>{
        axios.get('http://localhost:4000/User/'+id)
        .then(res => {
            setValues ({...values, name: res.data.name, email: res.data.email, mobile: res.data.mobile, designation: res.data.designation, gender: res.data.gender, course: res.data.course, image: res.data.image})
        })
        .catch(err =>console.log(err))
    })

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:4000/User/'+id, values)
        .then (res => {
           navigate('/')
        })
        .catch(err =>console.log(err))
    }


  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"  >
                <form onSubmit={handleSubmit} >
                    <img className='m-0' src="../src/assets/DealsDray(1).png" alt="" />
                    <h2>update</h2>

                   
                    <div className="mb-2">
                        <label >Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        value={values.name} onChange={e=> setValues({...values, name: e.target.values})} />
                    </div>
                    <div className="mb-2">
                        <label >Email</label>
                        <input type="text" placeholder='Enter Email' className='form-control'
                        value={values.email} onChange={e=> setValues({...values, email:e.target.values})}/>
                    </div>
                    <div className="mb-2">
                        <label >Mobile No</label>
                        <input type="text" placeholder='Enter Mobile no' className='form-control'
                        value={values.mobile} onChange={e=> setValues({...values, mobile:e.target.values})}/>
                    </div>
                    <div className="mb-2">
                        <label >Designation</label>
                        <select type="" placeholder='Enter Mobile no' className='form-control'
                        value={values.designation} onChange={e=> setValues({...values, designation:e.target.value})}>
                            <option value="Designation">Select Designation</option>
                                        <option value="HR">HR</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Sales">Sales</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label >Gender</label>&nbsp;&nbsp;
                        <input type="Radio"  name='gender'
                        value={values.gender} onChange={e=> setValues({...values, gender:e.target.values})}/>
                 &nbsp; <label >Male</label>&nbsp;
                        <input type="Radio" name='gender'
                        value={values.gender} onChange={e=> setValues({...values, gender:e.target.values})}/>
                  &nbsp;<label >Female</label>
                    </div>

                    <div className="mb-2">
                        <label >Course</label>&nbsp;&nbsp;
                        <input type="checkbox" value='course' placeholder='Enter Mobile no' value='MCA'
                        value={values.course} onChange={e=> setValues({...values, course:e.target.values})}/>&nbsp;MCA&nbsp;
                        <input type="checkbox" value='course' placeholder='Enter Mobile no' value='BCA'
                        value={values.course} onChange={e=> setValues({...values, course:e.target.values})}/>&nbsp;BCA&nbsp;
                        <input type="checkbox" value='course' placeholder='Enter Mobile no' value='BSC'
                        value={values.course} onChange={e=> setValues({...values, course:e.target.values})}/>&nbsp;BSC&nbsp;
                    </div>

                    <div className="mb-2">
                        <label >image Upload</label>
                        <input type="files" placeholder='Enter Mobile no' className='form-control'
                        value={values.image} onChange={e=> setValues({...values, image:e.target.values})}/>
                    </div>
        
                    
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Update;