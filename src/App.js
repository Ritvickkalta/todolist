import './App.css';
import React,{useState} from 'react';
import ListComp from './listComp';
function App() {
  const [lvalue, setvalue] = useState();
  const [item, setitem] = useState([]);
 const pella=(e)=>{
   setvalue(e.target.value);
 }
 const list=()=>
 {
   setitem((ov)=>{
     return [...ov,lvalue];
   })
   setvalue("");
 }
 const deleteitems=(id)=>
 {
   setitem((ov)=>
   {
     return ov.filter((arr,index)=>{
       return id!==index })
   })
 }
  return (
    <div className="app">
      <header className="headerr">TODO LIST</header>
      <input  type="text" className="input" placeholder="Enter the task" onChange={pella} value={lvalue}></input>
      <button type="submit" onClick={list} className="inputbutton">+</button>
      {item.map((val,inde)=> {return <ListComp text={val}
      //key={inde}
      id={inde}
      onSelect={deleteitems}/>;})}
    </div>
  );
}

export default App;
