import '../App.css'
import Grid_Image from './image';
function NavBar() {
  return (
    <div className="App">
        <nav className='NavBar'>
        <div className="Logo">
            <Grid_Image number="logo" className="Logo"/>
        </div>
        <h2 className='textnav'>Agnon energy Team #1052</h2>
            <a className='Nav_items' href='#home'>בית</a>
            <a className='Nav_items' href='#AboutUs'>אודות</a>
            <a className='Nav_items' href='#Team'>חברי הקבוצה</a>
            <a className='Nav_items' href='#Media'>מדיה</a>
        </nav>
    </div>
  );
}

export default NavBar;
