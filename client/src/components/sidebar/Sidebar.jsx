import React from 'react';
import "./Sidebar.css";
import {useState} from "react";
import axios from 'axios';
import {useEffect} from "react";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats,setCats]=useState([]);

    useEffect(()=>{
      const getCats=async ()=>{
          const res=await axios.get("/categories");
          setCats(res.data);
      }
      getCats();
    },[]);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                 <span className="sidebarTitle">ABOUT US</span>
                 <img className='sidebarImg'
          src="https://media-exp1.licdn.com/dms/image/C4E1BAQEiqqlFUUh5Pw/company-background_10000/0/1627024963590?e=2147483647&v=beta&t=wG9t59-WAAdu6kdAS1vcWaPquBtbmAbM80sVcFRvTCE"
          alt=""
        />
        <p>
        Pune Institute of Computer Technology (PICT), an elite academic Institute located in Pune (India), which is rightly known as “The Oxford of the East”, playing an inspiring role in the education sector since its establishment in 1983.
        </p>
            </div>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i class=" topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
        
                <i className="topIcon fab fa-instagram-square"></i>
                </div>
            </div>
            
        </div>
    )
}
