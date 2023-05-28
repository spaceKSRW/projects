import Header from "./Header";
import React,{useState} from 'react';
import './App.css'


 
function App(){

    const [num,setNum]=useState(1);
    function inc(n)
    {
        setNum(num+n);
    }
    function dec(){
        setNum(num-1);
    }
   
    return (
       
        <div className="App" >
        <Header/>
        <h1 className="heading">{num}</h1>
        <div className="main">
          
            <button className="btn" onClick={()=>inc(100000)} >
              increment
            </button>
            <button className="btn" onClick={dec}>
                decrement
            </button>
        </div>
        
        </div>
        
  
    );
}
export default App;