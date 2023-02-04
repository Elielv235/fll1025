import './App.css';

import * as Componants from './imports'
function App() {
  return (
    <div id='home' className="Home">
      <Componants.NavBar/>
      <Componants.Home/>
      
      <Componants.About/>
      <Componants.PeopleGrid/>
      <Componants.ImageGrid/>
    </div>
  );
}



export default App;
