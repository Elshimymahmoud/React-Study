

import { useState } from 'react';
import './Form.css'
function Form() {
    let [name,setname]=useState('')
    let [password,setpassword]=useState('')
    let [gender,setgender]=useState('')
 
    let namehandlier=(value)=>{
        setname(value)
    }
    let passwordhandlier=(value)=>{
        setpassword(value)
        }
        let genderhandlier=(value)=>{
            setgender(value)
            }
  return (
    <>
      <form className="form" onSubmit={(eo)=>{eo.preventDefault()
        console.log(name,password,gender);
      }} >
        <lable>Name:</lable>
        <br />
        <input type="email" placeholder="Ex@email.com" alt="Name" onChange={(eo)=>namehandlier(eo.target.value)}/>
        <lable>Password:</lable>
        <br />
        <input type="password" alt="password" onChange={(eo)=>passwordhandlier(eo.target.value)} />
        <lable>Gender:</lable>
        <br />
        <select  onChange={(eo)=>genderhandlier(eo.target.value)}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <div className="divider"></div>
        <button >Submit</button>
      </form>
    </>
  );
}
export default Form;
