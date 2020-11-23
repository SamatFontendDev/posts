import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">Posts</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link">
                            <Link to="/">Записи</Link>
                        </a>
                        <a className="nav-link">
                            <Link to="/admin" >Управление записями</Link>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar