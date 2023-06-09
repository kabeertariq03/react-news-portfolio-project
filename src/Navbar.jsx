import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {

  const [check, setCheck] = useState(false);


  return (
    <>
      <nav className={check ? "navbar navbar-expand-lg navbar-dark bg-dark navbar-dark" : "navbar navbar-expand-lg bg-light"}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">The Daily Scoop</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => {
                setCheck(check => !check)
              }}/>
              {check ? <label className="form-check-label text-white-50" htmlFor="flexSwitchCheckDefault">Disable Dark Mode</label> : <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>}
            </div>
          </div>
        </div>
      </nav>



    </>
  );
}

