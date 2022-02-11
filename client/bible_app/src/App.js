
import './App.css';
import axios  from 'axios'





// hit the API

function App() {
  async function HitApi(){
  

    // store the results in a variable
    
    axios.get('http://localhost:3001')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  

  }
  
  return (
    <div className="App">
     <h1>Welcome to Your-Verse</h1>
     <h2>The Free Bible App</h2>
     <button onClick = {()=>{HitApi()}}>click to hit the api</button>
     <h3>Integrate Your-Verse in all your Bible App needs</h3>
    </div>
  );
}

export default App;
