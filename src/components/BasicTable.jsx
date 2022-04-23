import { Formik } from "formik";
import React from "react";
import Doctor from "../images/doctors.gif";
import Logo from "../images/image 1.png";

export default function BasicTable() {
  return (
    <>
      <div className="container">
        <div className="left">
          <img width="50%" src={Doctor} alt="я джифка"></img>
        </div>
        <div className="right">
          <div className="text">
            <p>BISHKEK INTERNATIONAL MEDICAL INSTITUTE</p>
          </div>
          <div className="logo">
            <img src={Logo} alt="logo"></img>
          </div>
          <div className="login">
            <h2>LOGIN</h2>
          </div>
          <Formik>
            <form>
              <div>
                <input className="input" type="text" placeholder="Your login" />
              </div>
              <br />
              <div>
                <input className="input2" type="text" placeholder="Password" />
              </div>
              <div>
                <button className="btn">Log in</button>
              </div>
            </form>
          </Formik>
        </div>
      </div>
    </>
  );
}
