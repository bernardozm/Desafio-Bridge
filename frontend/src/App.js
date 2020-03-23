import React, { useState } from 'react';
import api from  './services/api';
import './App.css';


function App() {

  const [number, setNumber] = useState('');
  const [dividers, setDividers] = useState([]);
  const [isPrime, setIsPrime] = useState('');
  const [ historic, setHistoric] = useState([]);
  const [ searchNumber, setSearchNumber] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/calculate', {number});
    
    if(response.data.isPrime === true){
      setIsPrime('é primo');
    } else {
      setIsPrime('não é primo');
    }
    setDividers(response.data.dividers);
    setSearchNumber(number);
    saveHistoric()
    
  }

  function saveHistoric() {

    var numbersHistoric = historic;
    numbersHistoric.push(number)

    localStorage.setItem('historico', JSON.stringify(numbersHistoric)) 
    
    setHistoric(JSON.parse(localStorage.getItem('historico')));

  }


  return (
    <div className = "container" >
    
      <div className = "content">
        <p>
          Digite um <strong>número</strong> para verificar se ele é primo e conhecer seus divisores
        </p>

        <form onSubmit={handleSubmit}>
          
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
          <p> O número <strong>{searchNumber}</strong> <strong>{isPrime}</strong> e seus divisores são:</p>
          <ul>
          {dividers.map(number => <li>{number}</li>)}
          </ul>
        </div>
         : 
        ''}
       <div className="historic">         
          <p> Números pesquisados :</p>
          <ul>
          {historic.map(number => <li>{number}</li>)}
          </ul>
        </div>

      </div>
  ); 
}

export default App;
