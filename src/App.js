import './App.css';
import React, { useState } from 'react';
const list  = ["Paper", "Rock", "Scissors"]

function App (){
  var [selection, selectionState] = useState(0);
 var r = Math.floor(Math.random()*3) + 1;
    return (
      <div className="container text-center">
       <div className='score'>
       
       {   
    (() => {
        switch (r) {
            case 1:
                if(selection === 1){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/> Draw !</div>
                )}
                if(selection === 2){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/>
                    You Lose</div>
                )}

                if(selection === 3){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/>
                    You Win !</div>
                )}
                
               break;
           case 2: /*Case 2 */
           if(selection === 2){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/>Draw !</div>
                )}
            
           if(selection === 1){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/>
                    You Win !</div>
                )}
            
          if(selection === 3){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/>
                    You Lose</div>
                )}
            


            break;
           case 3:/*Case 2 */
           if(selection === 3){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/>Draw !</div>
                )}

          if(selection === 1){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/>
                    You Lose</div>
                )}

          if(selection === 2){
                return (
                    <div>Your Selection is {list[selection-1]} <br/> Com Selection is {list[r-1]} <br/>
                   You Win !</div>
                )}
            break;
            default:selection=0;
          
        }
     })()}
       </div>








        <div>
          <div className="col-lg-12 col-md-12 col-sm-12 div_height ">
          <img  alt="" src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-paper-stationery-tulpahn-detailed-outline-tulpahn.png"
            onClick = {()=> selectionState(selection = 1)}
          /></div>

          <div className = "row col-lg-12 col-md-12 col-sm-12">
          <div className="div_width div_height"><img src="https://img.icons8.com/emoji/96/000000/rock-emoji.png" alt=""
            onClick = {()=> selectionState(selection = 2)}
          /></div>
          <div className=" div_width div_height"><img src="https://img.icons8.com/carbon-copy/100/000000/barber-scissors.png" 
          alt="" onClick = {()=> selectionState(selection = 3)}/></div>
          
      
          </div>
          
         
        </div>
      </div>
        );
    
    }
export default App;
