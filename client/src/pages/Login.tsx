import { Link } from "react-router-dom"
import '../../App.css'

function Login(){
    return(
        <>
            <div className="back-ground">
                <div className="center-container">
                    <h2>Login via Credential</h2>
                    <input type="text" name="userid" id="uderid" placeholder="Enter Your userid"/>
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" />
                    <Link id="button" to="/dash" >Login</Link>
                </div>
            </div>
        </>
    )
}

export default Login