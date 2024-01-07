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
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Id, setId] = useState('');
  const [show, setShow] =useState(false)
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
    setEmail("")
    setName("")
  };
  const handleDelete = async (id) => {
   const deleteVal= doc(database, "demo", id)
   await deleteDoc(deleteVal)
  };
  const handleEdit = async (id, name, email) => {
    setEmail(email)
    setName(name)
    setShow(true)
    setId(id)
  };
  const handleUpdate = async () => {
    const updateData = doc(database, "demo", Id)
    await updateDoc(updateData, { Name: name, Email: email });
    setShow(false)
    setEmail("")
    setName("")
  };

  return (
    <>
      <div className="container">
        <h2>Contact List</h2>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Name" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
        {!show? <button onClick={handleCreate}>Create</button>
        : <button onClick={handleUpdate}>Update</button>}
        </div>
        
        <div className='data-box'>

        {val.map(values =>(
          <div key={values.id} className='data'>
            <h3>Name: {values.Name}</h3>
            <h3>Email: {values.Email}</h3>
           <span className='update-delete'> 
            <button onClick={()=> handleDelete(values.id)} >Delete</button>
            <button onClick={()=> handleEdit(values.id, values.Name, values.Email )} >Edit</button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
