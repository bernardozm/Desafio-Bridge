import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "container" >

      <div className = "content">
        <p>
          Digite um <strong>número</strong> para verificar se ele é primo e conhecer seus divisores
        </p>

        <form>
          <label htmlFor="numero">Número *</label>
          <input
            id = "numero"
            type = "numero"
            placeholder = "Ex.: 999"
          />

          <button type="submit">Calcular</button>
        </form>
      </div>

    </div>
  ); 
}

export default App;
