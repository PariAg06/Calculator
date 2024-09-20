import styles from "./Btnscontainer.module.css";

const Btnscontainer=({onBtnClick})=>{

    const Btnsname=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
return (

<div className={styles.btnscontainer}>
    {Btnsname.map((Btn)=>
     (<button className={styles.btn} onClick={()=>onBtnClick(Btn)}>{Btn}</button>))}
      

       </div>

);

};

export default Btnscontainer;