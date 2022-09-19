import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/general">Newsify</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/general">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
                
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" href="/#" onClick={this.props.setCountry}>India</Link></li>
                    <li><Link className="dropdown-item" href="/#" onClick={this.props.setCountry}>United States</Link></li>
                    <li><Link className="dropdown-item" href="/#" onClick={this.props.setCountry}>Great Britain</Link></li>
                    
                  </ul>
                  
                </li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/entertainment" onClick={this.props.setCategory} >Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/business" onClick={this.props.setCategory} >Business</Link></li>
                    <li><Link className="dropdown-item" to="/general" onClick={this.props.setCategory} >General</Link></li>
                    <li><Link className="dropdown-item" to="/health" onClick={this.props.setCategory} >Health</Link></li>
                    <li><Link className="dropdown-item" to="/science" onClick={this.props.setCategory} >Science</Link></li>
                    <li><Link className="dropdown-item" to="/sports" onClick={this.props.setCategory} >Sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology" onClick={this.props.setCategory} >Technology</Link></li>
                    
                  </ul>
                </li>
                
            </ul>

            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
