import React from 'react';
const api = {
  key: "4adc052e14ee72852725b92ec0e64705",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
     <main>
      <div className='search box'>
        <input 
        type='text'
        className='search-box'
        placeholder='Search...'>
        </input>
      </div>
     </main>
    </div>
  );
}

export default App;
