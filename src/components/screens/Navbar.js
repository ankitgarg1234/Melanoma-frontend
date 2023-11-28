import React, { useContext } from 'react'
import logo from '../../images/mela.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import { useNavigate } from 'react-router-dom'

export default function Navbar({login}) {

  const navigate = useNavigate()
  const {setModalOpen} = useContext(LoginContext)


  return (
    <div className="navbar">
      <img
        id="insta-logo"
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <ul className="nav-menu">
        {localStorage.getItem("jwt") ? (
          <>
            <Link to="/">
              {" "}
              <li>Home</li>{" "}
            </Link>
            <Link to="/profile">
              {" "}
              <li>My Uploads</li>{" "}
            </Link>
            <Link to="/createPost">
              {" "}
              <li>Spot Analysis</li>{" "}
            </Link>
            <Link to="/followingpost" style={{ marginLeft: "20px" }}>
              {" "}
              <li>Medical Connections</li>{" "}
            </Link>

            <Link to={""}>
              <button className="primaryBtn" onClick={() => setModalOpen(true)}>
                Log Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">
              {" "}
              <li>SignUp</li>{" "}
            </Link>
            <Link to="/signin">
              {" "}
              <li>SignIn</li>{" "}
            </Link>
          </>
        )}
      </ul>
      <ul className="nav-mobile">
        {localStorage.getItem("jwt") ? (
          <>
            <Link to="/">
              {" "}
              <li>
                <span className="material-symbols-outlined">home</span>
              </li>{" "}
            </Link>
            <Link to="/profile">
              {" "}
              <li>
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </li>{" "}
            </Link>
            <Link to="/createPost">
              {" "}
              <li>
                <span className="material-symbols-outlined">add_box</span>
              </li>{" "}
            </Link>
            <Link to="/followingpost" style={{ marginLeft: "20px" }}>
              {" "}
              <li>
                <span className="material-symbols-outlined">explore</span>
              </li>{" "}
            </Link>

            <Link to={""}>
              <li className="primaryBtn" onClick={() => setModalOpen(true)}>
                <span className="material-symbols-outlined">logout</span>
              </li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">
              {" "}
              <li>SignUp</li>{" "}
            </Link>
            <Link to="/signin">
              {" "}
              <li>SignIn</li>{" "}
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}
