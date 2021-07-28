// import Link from 'next/link'
// import hh from '../komponen/cont/cts'
export default function Navbar(){
    return(

        <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
      <div className="container justify-content-center"> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar9">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center justify-content-center" id="navbar9">
          <ul className="navbar-nav">
            <li className="nav-item mx-2"> <a className="nav-link" href="#">Products</a> </li>
            <li className="nav-item mx-2"> <a className="nav-link" href="#">FAQ</a> </li>
            <li className="nav-item mx-2"> <a className="nav-link navbar-brand mr-0 text-white" href="#"><i className="fa d-inline fa-lg fa-stop-circle-o"></i>
                <b> BRAND</b></a> </li>
            <li className="nav-item mx-2"> <a className="nav-link" href="#">About us</a> </li>
 <li className="nav-item mx-2">  <a className="nav-link" href="../komponen/contacts">Contacts </a> </li>
    
          </ul>
        </div>
      </div>
    </nav>
                 
             </div>  

     
    )
}