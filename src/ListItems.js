import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button } from '@material-ui/core';



function ListItems(props){
    const items = props.items;
    const completedItems = props.completedItems;
    const activeItems = props.activeItems;

    const listItems = items.map(item =>
        
   { 
       var itemClass = " " + ( item.status ? "done" : "undone");
        console.log(itemClass)
       return <div className="list" key={item.key}>
     <p>
     <CheckCircleIcon className={"faicon"} onClick={() => {
            props.completeItem(item.key)
        }} icon="trash" />
        
         <input type="text" className={itemClass} id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
            
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    const completedList = completedItems.map(item =>
        
        { 
            var itemClass = " " + ( item.status ? "done" : "undone");
             console.log(itemClass)
            return <div className="list" key={item.key}>
          <p>
          <CheckCircleIcon className={"faicon"} onClick={() => {
                 props.completeItem(item.key)
             }} icon="trash" />
             
              <input type="text" className={itemClass} id={item.key} value={item.text} onChange={(e)=>{
                  props.setUpdate(e.target.value,item.key)}}/>
             <span>
            
             <FontAwesomeIcon className="faicons" onClick={async() => {
                 await props.deleteItem(item.key)
                 await props.completedItemsCreation();
                 props.changeWhatToView('completed');
             }} icon="trash" />
             </span>
          </p>
          
         </div>})
    const activeList = activeItems.map(item =>
        
        { 
            var itemClass = " " + ( item.status ? "done" : "undone");
             console.log(itemClass)
            return <div className="list" key={item.key}>
          <p>
          <CheckCircleIcon className={"faicon"} onClick={() => {
                 props.completeItem(item.key)
             }} icon="trash" />
             
              <input type="text" className={itemClass} id={item.key} value={item.text} onChange={(e)=>{
                  props.setUpdate(e.target.value,item.key)}}/>
             <span>
            
             <FontAwesomeIcon className="faicons" onClick={async () => {
                await props.deleteItem(item.key)
                await props.activeItemsCreation();
                await props.changeWhatToView('active');
                 
             }} icon="trash" />
             </span>
          </p>
          
         </div>})
         console.log(props.whatToView)
    if (props.whatToView === ''){
        return (
        
            <div 
            
        >
                <FlipMove duration={300} easing="ease-in-out">
                {listItems}
                </FlipMove>
                <div style={{paddingLeft: 60 }}>
                <Button variant="contained" color="primary" className="faicons2" onClick={(e) => {
                    props.changeWhatToView('');
            }} icon="trash" >All</Button>
            <Button variant="contained" color="primary" className="faicons2" onClick={() => {
                props.activeItemsCreation();
                props.changeWhatToView('active');
            }} icon="trash" >Active</Button>
            <Button variant="contained" color="primary" className="faicons2" onClick={() => {
                props.completedItemsCreation();
                props.changeWhatToView('completed');
            }} icon="trash" >Completed</Button>
            </div>
            </div>
)
        }
        if(props.whatToView === 'active'){
            return (
        
                <div>
                <FlipMove duration={300} easing="ease-in-out">
                {activeList}
                </FlipMove>
                <div style={{paddingLeft: 60 }}>
                <Button variant="contained" color="primary" className="faicons2" onClick={(e) => {
                    props.changeWhatToView('');
            }} icon="trash" >All</Button>
            <Button variant="contained" color="primary" className="faicons2" onClick={() => {
                props.activeItemsCreation();
                props.changeWhatToView('active');
            }} icon="trash" >Active</Button>
            <Button variant="contained" color="primary" className="faicons2" onClick={() => {
                props.completedItemsCreation();
                props.changeWhatToView('completed');
            }} icon="trash" >Completed</Button>
            </div>
            </div>
                )
        }
        if(props.whatToView === 'completed'){
            return (
                <div>
                <FlipMove duration={300} easing="ease-in-out">
                {completedList}
                </FlipMove>
                <div style={{paddingLeft: 60 }}>
                <Button variant="contained" color="primary" className="faicons2" onClick={(e) => {
                    props.changeWhatToView('');
            }} icon="trash" >All</Button>
            <Button variant="contained" color="primary" className="faicons2" onClick={() => {
                props.activeItemsCreation();
                props.changeWhatToView('active');
            }} icon="trash" >Active</Button>
            <Button variant="contained" color="primary" className="faicons2" onClick={() => {
                props.completedItemsCreation();
                props.changeWhatToView('completed');
            }} icon="trash" >Completed</Button>
            </div>
            </div>
                )
        }

        
  }

  export default ListItems;