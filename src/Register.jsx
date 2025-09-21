import './App.css'
import { useNavigate,Link } from 'react-router-dom'
function Register (){
    const navigate = useNavigate();
    const handleRegister = (e)=>{
        e.preventDefault();
        navigate("/Home");
    }
    return(
        <>

               <div className='Register'>

                          <div className='Motive'>
                <p> <bold><i>"Your world,your fandom.Shop anime product <br />like never before"</i></bold></p>
            </div>
           <form onSubmit={handleRegister} action="">
             <h2 className='Register-heading'>Register</h2>
            <input className='input' type="text" placeholder="Username" required/> <br /> <br />
            <input className='input' type="email" placeholder="Email" required /> <br /> <br />
             <input className='input' type="password" placeholder="Password" required /> <br /> <br />
              <input className='input' type="password" placeholder="Confirm Password" required /> <br /> <br />
              <label className='checkbox-container'>
                <input type='checkbox' required/>
                <span className='checkmark'>Accept terms</span>
              </label> <br /> <br />
                <button >Register</button>
                <p className='Texts'>Already have an account? <Link className='Link' to ="/">Login</Link></p>
           </form>
        </div>
        </>
    )

}
export default Register