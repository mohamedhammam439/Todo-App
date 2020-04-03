import React, { Component } from 'react';
import Todolist from './Components/Todolist/Todolist';
import Addlist from './Components/Addlist/Addlist';
import './App.css';


class App extends Component {

  state = {
    items : [
      {id:1,name:'Breakfast',hours:'1'},
      {id:2,name:'Resting',hours:'1'},
      {id:3,name:'Studing',hours:'3'},
    ]
  }

  deletitem = (id) => {
    let user=this.state.items.filter(item=>item.id !==id);
    this.setState({items:user})
  }

  addlist =(item)=>{
    let {items}=this.state;
    items.push(item)
    this.setState({items})
  }


  render() {
    return (
      <div className="App" className='container'>
        <h1>ToDoList App</h1>
        
        <Todolist items={this.state.items} deletitem={this.deletitem}/>
        <Addlist addlist={this.addlist} />
  
      </div>
    );
  }
 
}

export default App;
