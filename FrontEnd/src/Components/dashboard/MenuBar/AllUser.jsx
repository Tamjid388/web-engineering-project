import axios from 'axios';
import { useEffect, useState } from 'react'

export default function AllUser() {
 
  const [user,setUser]=useState([])


  useEffect(() => {
    axios
      .get("http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/get_users.php")
      .then((res) => {
        setUser(res.data.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
console.log(user);


  return (
    <div className="overflow-x-auto border border-gray-200 mt-8 p-4">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        user.map((info)=><tr key={info.id}>
        <th>{info.id}</th>
        <td>{info.name}</td>
        <td>{info.email}</td>
        <td>{info.role}</td>
        <td className='space-x-2 '>
          <button className="btn btn-sm bg-green-100 text-green-500">Make Admin</button>
          <button className="btn btn-sm bg-red-100 text-red-500">Delete User</button>
        </td>
      </tr>)
      }
  
     
 
    </tbody>
  </table>
</div>
  )
}
