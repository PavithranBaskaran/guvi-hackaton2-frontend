import React from 'react'
import { useNavigate } from "react-router-dom";
function Navbar(props) {
    let navigate = useNavigate()
    let doLogout = () => {
        localStorage.removeItem('react_app_token');
        navigate('/')
        
      }
  return (
    <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Book My Show</a>
    
    
      <div className='d-flex flex-wrap'>
      <h4 class=" navbar-text text-light">
        {props.data}
      </h4>
      <button className='m-2 btn btn-secondary ' onClick={doLogout}>Logout</button>
      </div>
  </div>
</nav>
  )
}

export default Navbar