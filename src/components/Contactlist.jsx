import React, { useState } from 'react';
  import {Contactcard} from './Contactcard';
  import styles from "./Card.module.css";
const initState = [
    {
      id: 1,
      name : "Albart sibtain",
      email: "albart@email.com",
      image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
      phone: "+91 7901346775"
    },
    {
      id: 2,
      name : "Salem Basumata",
      email: "salem@email.com",
      image: "http://dummyimage.com/50x50.png/dddddd/000000",
      phone: "+91 78998752815"
    },
    {
        id: 3,
        name : "Anneta Murphy",
        email: "saracruz@email.com",
        image: "http://dummyimage.com/50x50.png/ff4444/ffffff",
        phone: "+91 5468292815"
      },
      {
        id: 4,
        name : "Therasa Watson",
        email: "therasawatson@email.com",
        image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
        phone: "+91 2348292815"
      },
       {
        id: 5,
        name : "Cody Howard",
        email: "cody@email.com",
        image: "http://dummyimage.com/50x50.png/dddddd/000000",
        phone: "+91 9808672815"
      },
      {
        id: 6,
        name : "Max Lane",
        email: "maxlane@email.com",
        image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
        phone: "+91 9908292815"
      },
      {
        id: 7,
        name : "Pablo Escobar",
        email: "mrpablo@email.com",
        image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
        phone: "+91 9908292420"
      },
  ];

  
  
  function Contactlist() {
   const [contactList, setContactlist] = useState(initState)   
    return (
      <div className={styles.listbox}>
       {contactList.map((item )=>(
       <div key = {item.id}>
       <Contactcard image={item.image} name= {item.name} phone={item.phone} email={item.email}/>
    
       </div>
     ))}
      </div>
    )
  }
  
  export default Contactlist