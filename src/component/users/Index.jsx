import axios from 'axios';
import Table from 'react-bootstrap/Table';

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Index() {


const [ users , setUsers]=useState([]);

let[loader , setLoader] =useState('')


const getUser= async ()=>{

    const {data}= await axios.get("https://crud-users-gold.vercel.app/users");
    // console.log(data.users)
    setUsers(data.users)
    setLoader(false);




}


const deleteUser = async (id)=>{
    setLoader(true);


    const{data}=await axios.delete(`https://crud-users-gold.vercel.app/users/${id}`)
    console.log(data)

if (data.message == 'success'){
    toast.success("Deletes Successfuly !!")
    setLoader(false);

getUser()
}
}





useEffect(
    ()=>{
        setLoader(true);
        getUser();
    } , []
)




if (loader ){
    return(

        <div> loading </div>
    )
}

    return (
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>


                  <li>
                  <Link className="nav-item active" aria-current="page" to='/user/index'>Index</Link>

                  </li>


                  <li>
                  <Link className="nav-item " aria-current="page" to='/user/create'>Craete</Link>

                  </li>
                  <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                  </li>
                  <li>
                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                      <i className="fs-4 bi-bootstrap" /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                  </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">loser</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                      <hr className="dropdown-divider" /> 
                    </li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col py-3">
              
        
            <Table striped bordered hover size="sm">


           
      <thead>
        <tr>
          <th> Index</th>
          <th>Name</th>
          <th> Email</th>
          <th>Password</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>

      {users.map((user , index)=>{

return (
<React.Fragment key={user._id} >
<tr>
<td>{index}</td>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.password}</td>
<td className='btn btn-danger bg-danger my-2' onClick={()=>deleteUser(user._id)}>Delete</td>
<td className='btn btn-success bg-success my-2 mx-2' > <Link className='text-black' to={`/user/${user._id}`}> Details </Link> </td>
<td className='btn btn-info bg-info my-2 mx-2'> <Link className='text-black' to={`/user/edit/${user._id}`}> Edit </Link></td>
</tr>


</React.Fragment>

)



})}
      
     
      
      </tbody>
    </Table>        
        
            </div>
          </div>
        </div>
          )
}

export default Index