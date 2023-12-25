//        setVal(dbVal.docs.map(doc=>({...doc.data(),id:doc.id})))
     
//        {
//         val.map(values=>
//         <div key={values.id}>
//           <h2>Name:{values.name}</h2>
//           <h2>Email:{values.email}</h2>
//           </div>)
//        }
//     </div>

import React, { useState, useEffect } from 'react';
import { database } from './config/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [val, setVal] = useState([]);

  const value = collection(database, 'demo');

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map(doc => ({ ...doc.data(), id:doc.id })));
    };
    getData();
  },[] );

  const handleCreate = async () => {
    await addDoc(value, { Name: name, Email: email });
  };

  return (
    <>
      <div className="container">
        <h2>Contact List</h2>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Name" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
        <button onClick={handleCreate}>Create</button>
        </div>
        
        <div className='data-box'>

        {val.map(values =>(
          <div key={values.id} className='data'>
            <h3>Name: {values.Name}</h3>
            <h3>Email: {values.Email}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
