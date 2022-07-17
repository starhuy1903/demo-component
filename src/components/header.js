import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './header.css'

class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg bg-dark text-light">
                    <div className="container px-lg-5">
                        <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

        );
    }
}

export default Header;