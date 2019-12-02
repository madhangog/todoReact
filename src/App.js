import React from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:'',
        status:false
      },
      completedItems:[],
      activeItems: [],
      whatToView: ''
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.isCompleted = this.isCompleted.bind(this);
    this.activeItemsCreation = this.activeItemsCreation.bind(this);
    this.completedItemsCreation = this.completedItemsCreation.bind(this);
    this.changeWhatToView = this.changeWhatToView.bind(this);
   }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      console.log([this.state.items.newItem])
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:'',
        status: false
      },
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now(),
        status: false
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }
  isCompleted(key){
    console.log("is completed ?")
    var some = this.state.items.filter(item =>
      key === item.key
    ) 
    console.log(some[0].status)
    return some.status
    }
  completeItem(key) {
    var updatedItems = this.state.items.map(item => {
      if (key === item.key)
        item.status = !item.status;
        console.log("comimg inside")
      return item;
    });
    
    // State Updates are Merged
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  completedItemsCreation(e){
    let completedItems = this.state.items.filter(item =>  
      item.status === true)
      console.log(completedItems)
      console.log(this.state.completedItems)
      this.setState({
        completedItems :completedItems
      })
      console.log(completedItems)
  }
  activeItemsCreation(e){
    let activeItems = this.state.items.filter(item=>
      item.status ===false)
      console.log(activeItems)
      console.log("coming inside"+ activeItems  )
    this.setState({
      activeItems: activeItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
  }
  changeWhatToView(whatToView){
    console.log(whatToView)
    console.log('coming ti change what to view')
    const whatToView1 = whatToView
     this.setState ({
      whatToView : whatToView1
    }) 
    console.log("changed  view" + this.state.whatToView + 'view printed')
  }
 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        
          <ListItems items={this.state.items} whatToView= {this.state.whatToView} changeWhatToView={this.changeWhatToView} activeItems = {this.state.activeItems} completedItems={this.state.completedItems} activeItemsCreation = {this.activeItemsCreation} completedItemsCreation={this.completedItemsCreation} isCompleted={this.isCompleted} completeItem={this.completeItem} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
  );
 }
}
export default App;
