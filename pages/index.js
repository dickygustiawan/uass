
import Link from 'next/link'
import Copyrig from './komponen/komlogin/copyrig'


export default function Home() {
  return (
   
     <div className="container">
  
  <div className="row" id="pwd-container">
    <div className="col-md-4"></div>
    
    <div className="col-md-4">
      <section className="login-form">
        <form method="post" action="#" role="login">

        
        <marquee><center><h3><font color="black">JAYA MAKMUR ELEKTRO</font></h3></center></marquee>
        
          

          <input type="text" name="email" placeholder="User" required className="form-control input-lg"  />
          
          <input type="password" className="form-control input-lg" id="password" placeholder="Password" required="" />
          
          
          <div className="pwstrength_viewport_progress"></div>
          
          
          <Link href="/conten"><button type="submit" name="go" className="btn btn-lg btn-primary btn-block">Sign in</button></Link>
          <div>
            <Link href="/signup">Create account</Link>  <br></br>
            <Link href="user/dtUser"> Data User </Link>
          </div>
          
        </form>
        
       
      </section>  
      </div>
      
      <div className="col-md-4"></div>
      <Copyrig/>
      </div>
  
  
  
</div>

  )
}
