import React,{useState} from "react";
import "./Navbar.css";
import { Links } from "./Links";
import { Logo } from "./Logo";
import { Login } from "./Login";
import { SmallScreenNavbar } from "./SmallScreenNavbar";

const Navbar = () => (
    <nav className="app_navbar">
      <Logo />
      <Links />
      <Login />
      <SmallScreenNavbar />
    </nav>
  );


export default Navbar;
