import styles from "./App.module.css";
import Input from "./components/Input";
import Btnscontainer from "./components/Btnscontainer";
import { useState } from "react";
function App(){
  let [cacheval,setcacheval]=useState("");
 const onButtonClick=(Btn)=>
 {
  if(Btn==="C"){
       setcacheval("");
  }else if(Btn==="="){
      const res=eval(cacheval);
      setcacheval(res);
  }else{
    const newDispVal=cacheval+Btn;
    setcacheval(newDispVal);
  }
 }
  return (
    <>
    <div className={styles.calculator}>
   <Input dispval={cacheval}></Input>
    <Btnscontainer onBtnClick={onButtonClick}>
    </Btnscontainer>
    </div>
      
    </>
  )
}

export default App
