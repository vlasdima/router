import React,{Component} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Login from './login'
import Register from "./register";

export default class LandingPage extends Component{

    render() {
        return (
            <div>
                {routes}
            </div>
        );
    }
}

const Header = () =>{
    return(
        <header>
            <NavLink to="login">Login</NavLink> <br/>
            <NavLink to="register">Register</NavLink>
        </header>
    )
}


const routes = (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/login" component={Login} element={<Login/>} />
            <Route path="/register" component={Register} element={<Register/>} />
        </Routes>
    </BrowserRouter>
);