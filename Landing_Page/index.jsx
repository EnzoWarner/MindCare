import React from "react";
import Link from "@mui/material/Link";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import pixelcutExport11 from "./pixelcut-export-1-1.png";
import "./style.css";

export const MindCared = () => {
  return (
    <div className="mind-cared">
      <div className="div-2">
        <div className="overlap-group">
          <Navbar
            breakpoint="desktop"
            buttonClassName="design-component-instance-node"
            className="navbar-1"
            signUpClassName="navbar-instance"
          />
          <Link>Home</Link>
          <img className="pixelcut-export" alt="Pixelcut export" src={pixelcutExport11} />
        </div>
        <Header
          breakpoint="desktop"
          buttonClassName="header-instance"
          buttonClassNameOverride="design-component-instance-node"
          className="header-1"
        />
      </div>
    </div>
  );
};