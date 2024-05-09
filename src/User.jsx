import React, { useEffect, useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'


function User() {
    
    const [users, setUsers] = useState([])
   
    useEffect(()=>{
        axios.get('http://localhost:4000/User')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[]);

    const handleDelete =(id)=>{
        axios.delete('http://localhost:4000/User/'+id)
        .then(res =>{
            location.reload()
        })
        .catch(errr => console.log(errr));
    }

  return (
    <div>

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className=" bg-white rounded p-3"  >
            <img className='m-0' src="../src/assets/DealsDray(1).png" alt="" />
            <br />
                
                <Link to="/create" className='btn btn-success'>Add +</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login "className='btn btn-danger ms-5  '>Logout</Link>
            <table className='table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Course</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.image}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.course}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`} onClick={()=> handleEdit(user.id, user.name, user.email, user.mobile, user.designation, user.gender,user.course)}>Edit</Link> &nbsp;
                                        <Link onClick={()=> handleDelete(item.id)}>Delete</Link>
                                    </td>
                                </tr>
                            )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default User;