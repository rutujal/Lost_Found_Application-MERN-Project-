import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import {useState} from "react";
import axios from 'axios';

export default function Register() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false)

    const handleSubmit=async (e)=>{
        setError(false);
        e.preventDefault();
        try{ 
        
        const res=await axios.post("/auth/register",{
            username,
            email,
            password
        });
        res.data && window.location.replace("/login");
    }catch(err){
       setError(true);
    }
    };
    return (
        <div className="register">
        <span className="loginTitle">Register</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                  type="text" 
                  className="loginInput" 
                  placeholder="Enter your Username..."
                  onChange={e=>setUsername(e.target.value)}
                  />
                <label>Email</label>
                <input 
                  type="email" 
                  className="loginInput" 
                  placeholder="Enter your Email..."
                  onChange={e=>setEmail(e.target.value)}
                  />
                <label>Password</label>
                <input
                 type="password" 
                 className="loginInput" 
                 placeholder="Enter your Password..."
                 onChange={e=>setPassword(e.target.value)}
                 />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                 <Link className="link" to="/login">Login</Link>
            </button>
            { error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
            
        </div>
    )
}
