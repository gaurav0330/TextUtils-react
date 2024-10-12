import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar({ title = "TextUtils", aboutText = "About", mode, toggleMode }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} py-3 px-4 shadow-sm`}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-uppercase" to="/" style={{ fontSize: '28px', letterSpacing: '1px', color: mode === 'light' ? '#0d6efd' : '#ffffff' }}>
                    {title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{aboutText}</Link>
                        </li>
                    </ul>

                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" style={{ borderRadius: '20px' }} />
                        <button className="btn btn-outline-primary" type="submit" style={{ borderRadius: '20px' }}>
                            Search
                        </button>
                    </form>

                    <div className="d-flex align-items-center">
                        <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'} mx-3`}>
                            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                {mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
                            </label>
                        </div>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ borderRadius: '20px', backgroundColor: mode === 'light' ? '#0d6efd' : '#333' }}>
                                <FaUserCircle size={20} className="me-2" />
                                Profile
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item" to="/profile">View Profile</Link></li>
                                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
};
