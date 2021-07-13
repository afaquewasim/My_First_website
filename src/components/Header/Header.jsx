import React, { Component } from 'react';
import { Menu } from "./Menu";
import { Link } from 'react-router-dom';
import './header.css'

class Header extends Component{

    state = { clicked: false }

    handleclick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    




    render() {
        return (
            <nav className = "nav-item">
                <h1 className="logo"><Link className = "main-logo" to = "/">  MyShow </Link><i className="fab fa-react"></i> </h1>
                <div className="menu-icon" onClick = {this.handleclick}>
                    <i className = {this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked? 'nav-menu active': 'nav-menu'}>
                    {Menu.map((item, index) => {
                        return (
                            <li key = {index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.tittle}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Header;
