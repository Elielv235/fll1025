import logo from './logo.svg';
import './App.css';
import * as Componants from './imports'
function App() {
  return (
    <div className="App">

      <Componants.NavBar/>
      <div className='container'>
        <h1 className='text'>שלום</h1>
        <h1 className='text'>וברוכים הבאים ל</h1>
      <div className='container'>
      <div className='animation'>
        <h1 className='first'>Agnon</h1>
        <h1 className='slide'>
          <h1 className='secend'>Energy Team</h1>
        </h1>

        </div>
      </div>
      </div>
      <Componants.ImageGrid/>
    </div>
  );
}

export default App;
