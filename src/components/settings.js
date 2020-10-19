import React, { Component } from 'react';
import OrderTaken from './ordertaken';
import {Link, Router} from 'react-router-dom';
import "./settings.css"

class Settings extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            list : [],
            servicetype : [],
            priority : [],
            name : '',
            pq : this.props.pq,
        };
        this.getInputValue = this.getInputValue.bind(this);
        this.AddItem = this.AddItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.getInputValue1 = this.getInputValue1.bind(this);
        this.AddItem1 = this.AddItem1.bind(this);
        this.AddItem11 = this.AddItem11.bind(this);
        this.deleteItem1 = this.deleteItem1.bind(this);
        this.getInputValue11 = this.getInputValue11.bind(this);
        this.deleteItem11 = this.deleteItem11.bind(this);
        this.getCookie = this.getCookie.bind(this);
    };
    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
     getInputValue = (event) => {
        this.setState({
            name : event.target.value
        })       
    }
    AddItem = () =>{
       const newItem = this.state.name;
       this.setState({ list: this.state.list.concat(newItem)})
    }

    deleteItem = (id) =>{
        const list = Object.assign([], this.state.list);
        list.splice(id,1);
        this.setState({list: list})
    }

    getInputValue1 = (event) => {
        this.setState({
            name : event.target.value
        })
        
    }
    AddItem1 = () =>{
       const newItem = this.state.name;
       this.setState({ servicetype: this.state.servicetype.concat(newItem)})
    }

    deleteItem1 = (id) =>{
        const servicetype = Object.assign([], this.state.servicetype);
        servicetype.splice(id,1);
        this.setState({servicetype: servicetype})
    }

    getInputValue11 = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    AddItem11 = () =>{
       const newItem = this.state.name;
       this.setState({ priority: this.state.priority.concat(newItem)})
    }

    deleteItem11 = (id) =>{
        const priority = Object.assign([], this.state.priority);
        priority.splice(id,1);
        this.setState({priority: priority})
    }
   /* handleSubmit(e){
        e.preventDefault()
        var csrftoken = this.getCookie('csrftoken')
        var url = 'http://127.0.0.1:8000/settings/product-type/'
    
    
        fetch(url, {
                method:'POST',
                headers:{
                  'Content-type':'application/json',
                  'X-CSRFToken':csrftoken,
                  },
                  body:JSON.stringify(this.state)
                }).then((response)  => {
                      
                      this.setState({
                            list = list,
                            priority = priority,
                            servicetype =  servicetype,    
                      })
                      this.props.history.push('/');
                  }).catch(function(error){
                  console.log('ERROR:', error)
                })
    
        }*/
    
    render() { 
        return ( 
            <div>
                {this.state.pq==="true" ? <OrderTaken list = {this.state.list} servicetype = {this.state.servicetype} priority = {this.state.priority}>
                                 </OrderTaken> :
                 <div>  
                 <div class="row">
                 <div class="column">
                 <input type="text" onChange={this.getInputValue} placeholder="add new element" ></input>
                 <button className="btn btn-success" onClick={ this.AddItem }>ADD NEW ITEM</button>
                 <ul>
                     {this.state.list.map((item, index) => <ol key={index} >{item}
                     <button onClick={() => this.deleteItem(index)}> X </button> </ol>)}
                 </ul>
                 </div>
                 <div class="column">
                 <input type="text" onChange={this.getInputValue1} placeholder="add new element" ></input>
                 <button className="btn btn-success" onClick={ this.AddItem1 }>ADD NEW servicetype</button>
                 <ul>
                     {this.state.servicetype.map((item, index) => <ol key={index} >{item}
                     <button onClick={() => this.deleteItem1(index)}> X </button> </ol>)}
                 </ul>
                 </div>
                 <div class="column">
                 <input type="text" onChange={this.getInputValue11} placeholder="add new element" ></input>
                 <button className="btn btn-success" onClick={ this.AddItem11 }>ADD NEW priority</button>
                 <ul>
                     {this.state.priority.map((item, index) => <ol key={index} >{item}
                     <button onClick={() => this.deleteItem11(index)}> X </button> </ol>)}
                 </ul>
                 </div>
                 </div>
                 <Link to="/" class="btn btn-info">SAVE & SUBMIT</Link>
                 </div>
                 }
            </div>
         );
    }
    
}
 
export default Settings;