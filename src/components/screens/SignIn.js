import React,{useState, useContext} from 'react'
import logo from '../../images/Insta_logo.png'
import '../styles/SignIn.css'
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginContext } from '../../context/LoginContext';

export default function SignIn() {

  const {setUserLogin} = useContext(LoginContext)

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //Toast functions
  const notifyA = (data)=> toast.error(data)
  const notifyB = (data)=> toast.success(data)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const postUser = ()=> {

  //checking email
  if(!emailRegex.test(email)){
    notifyA('Invalid email');
    return
  }

  fetch('http://localhost:5001/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(response => response.json())
    .then(data => {
      if(data.error){
        notifyA(data.error)
      }else{
        notifyB(data.message)
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        setUserLogin(true)
        navigate('/');
      }
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <div className="register">LogIn</div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        
          <input
            type="submit"
            id="submit-btn"
            value="Sign In"
            onClick={() => {
              postUser();
            }}
          />
        </div>
        <div className="form2">
          Donot Have A account?
          <Link to="/signup">
            <span className="signInForm2"> Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
