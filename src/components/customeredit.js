import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './customeredit.css'
class CUSTEDIT extends Component {
    state = { 
        n : "pp",
        cust : [
            [1,"cust-1","cust@gmail.com",9780123453],
            [2,"cust-2","cuts2@gmail.com",6781230983],
            [3,"cust-3","cuts3@gmail.com",9870128752],
        ],

     }
    AddInfo(){
         this.state.cust.push([this.state.cust.length+1,"cust-4","cust4@gmail.com",9089675867]);
    }
    render() { 
        return (  
            <div>
               <div> 
                 
               <h2>Select or Edit customer</h2> 
               {this.state.cust.map((cust,ind) => <ol key={ind}>
                   
                   <Collapsible trigger={<button class="btn btn-lg btn-info">{cust[0]} <button class="btn btn-success">view</button></button>}>
                       <br/>
                        <button class="btn btn-primary">EDIT</button> <br/><br/>
                        <strong>Name: {cust[1]}</strong>
                        <p>mail : {cust[2]}</p>
                        <p>mob no: {cust[3]}</p>
                        <button class="btn btn-danger">DELETE</button>
                   </Collapsible>
               </ol>)}
               </div>
               <Collapsible trigger={<button class="btn btn-primary">ADD NEW CUSTOMER</button>}>
                <div>
                   <form>
                       <input type="text" id="name" placeholder="Name"></input>
                       <br/>
                       <br/>
                       <input type="mail" id="mail" placeholder="Mail"></input>
                       <br/>
                       <br/>
                       <input type="mobile number" id="mob" placeholder="mob no"></input>
                       <br/>
                       <br/>
                      <button class="btn btn-success" type="submit" onclick={this.AddInfo()}>SUBMIT</button>
                   </form>
               </div>
                </Collapsible>
            </div>
        );
    }
}
 
export default CUSTEDIT;