import React, { useContext } from 'react'
import avatar from "../../assets/profile/defavatar.png"
import { Authcontext } from '../../AuthProvider/Authprovider'
import { Link } from 'react-router'
export default function DropDown({username}) {

  const { user,LogOut } = useContext(Authcontext)

  return (
   <div className="dropdown  dropdown-end">
  <div tabIndex={0} role="button" className=" m-1 rounded-full w-10 h-10">
<img src={avatar} className='h-full w-full object-cover rounded-full p-1
opacity-80 border border-gray-400 hover:border-gray-200
' alt="" />
  </div>
  <ul tabIndex={0} className="dropdown-content w-52 menu bg-base-100 rounded-box z-1  p-2 shadow-sm">
    <li><a className='font-semibold'>{username}</a></li>
    <li><Link to={'/dashboard/allusers'}>
    Dashboard
    </Link></li>
    <li><a>Wishlist</a></li>
   
  </ul>
</div>
  )
}
