import React, { Component } from 'react'
import './Employees.css'
import {Link, Router} from 'react-router-dom';
import Collapsible from 'react-collapsible';

class Employees extends Component{
    constructor(props){
        super(props);
        this.state = {
           emp : [
               [1, "shiva", "chair", 10, 8660026464],
               [2, "sharanu", "officer", 20, 9380746321],
               [3, "pratima", "deloit", 30, 8790546341],
               [4, "ganesh", "assistant-1", 50, 9567653456],
               [5, "sam", "assistant - 2", 24, 8769875432],
               [6, "kamal", "assistant-3", 46, 789012346],
           ],
        };
    };

    render()
    {
        return (
            <div>
                 <nav class="navbar navbar-inverse">
                    <div class="container">
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                         <a href="#" class="navbar-brand"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span>DRY-CLEAN</a>
                         <h2 class="navbar-brand"><strong><em>EMPLOYEES</em></strong></h2>
                      </div>
                      <div class="collapse navbar-collapse" id="bs-nav-demo">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/dashboard">DASH BOARD</Link></li>
                            <li><Link to="/ordertaken">ORDER TAKEN</Link></li>
                            <li><Link to="/customer">CUSTOMERS</Link></li>
                            <li><Link to="/employees">EMPLOYEES</Link></li>
                            <li><Link to="#">TRANSACTION</Link></li>
                            <li><Link to="#">REPORTS</Link></li>
                        </ul>
                      </div>
                   </div>
                </nav>
                <div id="page-1">
                    <ul>

                        {this.state.emp.map((people, ind) => <ol key={ind}>
                            
                             <Collapsible  trigger={<button class="btn btn-lg btn-primary">{people[0]} {people[1]} </button>}>
                                                <h1> Employee ID : {people[0]}</h1>
                                                <h2>Employee Name : {people[1]}</h2>
                                                <h3>Employee work : {people[2]}</h3>
                                                <h3>Employee age : {people[3]}</h3>
                                                <h3>Employee mobile number : {people[4]}</h3>
                                                
                            </Collapsible>
                        </ol>)}
                        
                    </ul>
                </div>
            </div>
        );
    }
};

export default Employees;
