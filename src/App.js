import './App.css';
import React, { useState } from 'react';


function App (){
  var [selection, selectionState] = useState(0);
 var r = Math.floor(Math.random()*3) + 1;
    return (
      <div className="container text-center">
       <div className='score'>
       {r + "may = " + selection}
       {   
    (() => {
        switch (r) {
            case 1:
                if(selection === 1){
                return (
                    <div>paper = paper</div>
                )}
               break;
           case 2: /*Case 2 */
           if(selection === 2){
                return (
                    <div>ROCK = ROCK</div>
                )}
            break;
           case 3:/*Case 2 */
           if(selection === 3){
                return (
                    <div>scissors = scissors</div>
                )}
            break;
        }
     })()}
       </div>








        <div>
          <div className="col-lg-12 col-md-12 col-sm-12 bg1 div_height ">
          <img  alt="" src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-paper-stationery-tulpahn-detailed-outline-tulpahn.png"
            onClick = {()=> selectionState(selection = 1)}
          /></div>

          <div className = "row col-lg-12 col-md-12 col-sm-12">
          <div className="bg2 div_width div_height"><img src="https://img.icons8.com/emoji/96/000000/rock-emoji.png" alt=""
            onClick = {()=> selectionState(selection = 2)}
          /></div>
          <div className="bg div_width div_height"><img src="https://img.icons8.com/carbon-copy/100/000000/barber-scissors.png" 
          alt="" onClick = {()=> selectionState(selection = 3)}/></div>
          
      
          </div>
          
         
        </div>
      </div>
        );
    
    }
export default App;
