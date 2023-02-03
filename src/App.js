import './App.css';
import * as Componants from './imports'
function App() {
  return (
    <div id='home' className="Home">
      <Componants.NavBar/>
      <div className='container'>
        <h1 className='text reveal'>שלום</h1>
        <h1 className='text reveal'>וברוכים הבאים ל</h1>
        <h1 className='text reveal'>Agnon</h1>
        <h1 className='text reveal'>Energy</h1>
        <h1 className='text reveal'>Team</h1>


        
      </div>
      <Componants.About/>
      <Componants.PeopleGrid/>
      <Componants.ImageGrid/>
    </div>
  );
}



export default App;
