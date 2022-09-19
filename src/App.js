import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';


export default class App extends Component {

  constructor(){
    super()
    this.state={
        category:'general'
  }
  }

  setCategory=(element)=>{
    let str=element.target.text.toLowerCase()
    this.setState({
      category:str
    })
  }

  render() {
    return (
      <Router>
        <Navbar setCategory={this.setCategory}/>
        <Routes>
          <Route path="/Newsify" element={<News key="/general" pageSize={15}  category={"general"}  />} />
          <Route path={`/${this.state.category}`} element={<News key={`${this.state.category}`} pageSize={15}  category={`${this.state.category}`}  />} />
          <Route path="/about" element={<About/>}  />
        </Routes>
      </Router>

    )
  }
}
