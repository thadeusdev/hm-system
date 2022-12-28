import React, { useState } from 'react';
import {
    FaTh,
    FaHospitalSymbol,
    FaCalendarAlt,
    FaMicroscope,
    FaBars,
    FaUserMd,
    FaWheelchair,
    FaDisease,
    FaTablets,
    FaSignOutAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/doctorAppointment",
            name:"Appointment",
            icon:<FaCalendarAlt/>
        },
        {
            path:"/doctors",
            name:"Doctors",
            icon:<FaUserMd/>
        },
        {
            path:"/patients",
            name:"Patients",
            icon:<FaWheelchair/>
        },
        {
            path:"/diseases",
            name:"Diseases",
            icon:<FaDisease/>
        },
        {
            path:"/diagnoses",
            name:"Diagnoses",
            icon:<FaMicroscope/>
        },
        {
            path:"/medicines",
            name:"Medicines",
            icon:<FaTablets/>
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<FaSignOutAlt/>
        } 
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><FaHospitalSymbol/></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>                           
                       </NavLink>
                   ))
               }
           </div>           
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;