import React from 'react'

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-3 border-bottom border-secondary">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className='fs-4 text-white'>Find Weather</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="https://github.com/Crimson-03" className="nav-link" aria-current="page">GitHub</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/krishan-kumar-779a5921b/" className="nav-link">LinkedIn</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;