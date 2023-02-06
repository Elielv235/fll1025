import '../App.css'

function NavBar() {


  return (
    <div  className="App">
        <nav className='NavBar'>
        
        <img className="Logo" src={require('../images/logo.png')} />
        
        <h2 className='textnav'>Agnon energy Team #1052</h2>
            <a href='#home'>בית</a>
            <a href='#AboutUs'>אודות</a>
            <a href='#Research'> חקר</a>
            <a href='#Team'>חברי הקבוצה</a>
            <a href='#Media'>מדיה</a>
            <div className='textnav'></div>
        </nav>
    </div>
  );
}

export default NavBar;
