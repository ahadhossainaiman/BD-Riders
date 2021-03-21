import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';



function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }
  

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 4;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo)
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }
  

console.log(user)

  return (
<>
<Form onSubmit={handleSubmit} className='login-form'>
    {
        newUser === true? <h4>Create and Account</h4> : <h4>Login Account</h4> 
    }
  <Form.Group controlId="formBasicEmail">
  <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
  <label htmlFor="newUser">New User Sign up</label><br/>
  {newUser &&  <Form.Control name="name" type="text" onBlur={handleBlur} placeholder="Enter Your Name" required/>}
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" name="email" onBlur={handleBlur} placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label >Password</Form.Label>
    <Form.Control type="password" name="password" onBlur={handleBlur} placeholder="Password" required/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <input type="submit" className='login-btn' value={newUser === true ? 'Sign up' : 'Login'}/>   
</Form>  
  <br/>
  <br/>
         <p style={{color:'red',textAlign:'center'}}>{loggedInUser.error}</p>    
<br/>
<h3 style={{textAlign:'center',color:'white'}}>OR</h3>
<hr/>
        { 
        user.isSignedIn ? <button onClick={signOut} className='google-login-btn'>Sign Out</button> :
        <button onClick={googleSignIn} className='google-login-btn'>Google Sign In</button>
        }
</>
  );
}

export default Login;