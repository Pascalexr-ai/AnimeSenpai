
import './index.css'
import { useNavigate,Link } from 'react-router-dom'

function Login(){
    const navigate =  useNavigate();
    const handleLogin =(e)=>{
        e.preventDefault();
        navigate('./Home');
    }
return(
    <>
    <button onClick={handleLogin} className='Shop-now'>Shop Now</button>
    <h1 className='Anime'>AnimeSenpai</h1>
        <div  className="Login">
                          <div className='Motive'>
                <p> <bold><em>"Your world,your fandom.Shop anime product <br />like never before"</em></bold></p>
            </div>
            <form onSubmit={handleLogin} action="">
            <h2 className='Login-header'>Login</h2>
            <input  type="text" placeholder="Username" required/> <br /> <br />
            <input  type="password" placeholder="Password" required/> <br /> <br />
            <button className='But'>Login</button>
            <p className='Text'>Don't have an account? <Link className='Link' to ="/Register">Register</Link></p>
            </form>
        </div>
    </>
)
}
export default Login;