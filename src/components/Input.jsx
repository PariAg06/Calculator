import styles from "./Input.module.css";

const Input=({dispval})=>{

return (


<input type="text" className={styles.display} value={dispval} readOnly/>
);
};
export default Input;


