import React, { useState } from 'react';
import styles from "./Card.module.css";

 const Contactcard=({name,email,image, phone})=>{
 const [show, setShow] = useState(false);

  return (
     
 <div>
     
    <div 
     className={styles.cardList}
     onClick={()=>
     setShow(!show)}
 >
    <div><img className={styles.cardImage} src={image} alt=""/></div>
    <div>
    <div className={styles.nametag}>{name}</div>
   
    <div className={styles.emailtag}>{email}</div>
    {show ? <div className={styles.phonenotag} >{phone}</div> :""}
    </div>
    </div>
</div>
  )
}

export  {Contactcard}