import React from 'react';
import data from '../Cards/productApi';
import AllCards from '../Cards/cardprop';
import './card.css';

function ProdList() {
  const alldata = data.map((eo) => (
    <AllCards key={eo.id} product={eo} />
  ));

  return <div className="card-container">{alldata}</div>; 
}

export default ProdList;
