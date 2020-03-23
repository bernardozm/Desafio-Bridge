import React, { useState } from 'react';
import api from  './services/api';
import './App.css';


function App() {

  const [number, setNumber] = useState('');
  const [dividers, setDividers] = useState([]);
  const [isPrime, setIsPrime] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();


    const response = await api.post('/calculate', {number});
    if(response.data.isPrime === true){
      setIsPrime('É primo');
    } else {
      setIsPrime('Não é prima');
    }
    setDividers(response.data.dividers);
   
    

  }
  return (
    <div className = "container" >

      <div className = "content">
        <p>
          Digite um <strong>número</strong> para verificar se ele é primo e conhecer seus divisores
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Número *</label>
          <input
            id = "number"
            type = "number"
            placeholder = "Ex.: 999"
            value = {number}
            required
            onChange ={event => setNumber(event.target.value)}
          />

          <button type="submit">Calcular</button>
        </form>
      </div>   
      {isPrime ? 

        <div className="result">
          <h3>Número {number}:</h3>
          <p> O número {number} {isPrime} e seus divisores são:</p>
          <ul>
          {dividers.map(numero => <li>{numero}</li>)}
          </ul>
          </div>
            : 
 ''}

    </div>
  ); 
}

export default App;
