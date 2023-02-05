import '../App.css'
import Grid_Image from './children/image';
function NavBar() {

  return (
    <div  className="App">
        <nav className='NavBar'>
        <div className="Logo">
            <img src={require('../../public/logo192')} className="Logo"/>
        </div>
        <h2 className='textnav'>Agnon energy Team #1052</h2>
            <a href='#home'>בית</a>
            <a href='#AboutUs'>אודות</a>
            <a href='#Team'>חברי הקבוצה</a>
            <a href='#Media'>מדיה</a>
        </nav>
    </div>
  );
}

export default NavBar;
