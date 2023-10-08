import { useState } from "react"
import React  from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaBeer, FaAlignJustify, FaEllipsis} from "react-icons/fa";
import '../App.css';

function Navbar() {
  return (
    <div>
        <h1 className="store-name"><a className='text-decoration-none' href="/">CFA Oviedo/North UCF</a></h1>
        <ul className="nav-ul">
            <li><a href="/">Home</a></li>
            <li><div><a href="/about">About Us</a><div className="dropdown-content"><a href="/about">Meet the Operators</a><a href="/meet-the-team">Meet the Team</a></div></div></li>
            <li><div><a href="/">Training</a><div className="dropdown-content"><a href="/new-hires">New Hires</a><a href="/path-for-growth">Path for Growth</a><a href="/pathway">Pathway</a></div></div></li>
            <li><a href="/">Leadership</a></li>
            <li style={{display:"hidden"}}><a href="/events">Events</a></li>
            <li><div><a href="/">Food Safety</a><div className="dropdown-content"><a href="/">General Rules</a><a href="/">Food Safety Checklist</a><a href="https://chick-fil-a.compliancemetrix.com/rql/p/ahomevrestauranthomeactivator" target="_blank">SAFE/ERQA</a></div></div></li>
            <li><a href="/uniforms">Uniforms</a></li>
        </ul>
    </div>
  )
}

export default Navbar

/*<div class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="" alt="" class="logo"/>CFA Oviedo/North UCF</a>
                    <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="#" role="button">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" role="button">About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" role="button">Announcements</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" role="button">Training</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" role="button">Leadership</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" role="button">Events</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" role="button">Food Safety</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" role="button">SAFE/ERQA</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" role="button">Uniforms</a></li>
                    </ul>
                    <i className="menu"><FaAlignJustify/></i>
                    </div>
                </div>
            </div> */
