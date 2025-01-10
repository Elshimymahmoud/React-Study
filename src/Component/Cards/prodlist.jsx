import React, { useEffect, useState } from 'react';
import AllCards from '../Cards/cardprop';
import './card.css';

function ProdList() {
    const[prod,setprod]=useState([]);
useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>{setprod(data)})
   
},[])


  const alldata = prod.map((eo) => (
    <AllCards key={eo.id} product={eo} />
  ));

  return <div className="card-container">{alldata}</div>; 
}

export default ProdList;
