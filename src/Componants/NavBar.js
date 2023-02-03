import '../App.css'
function NavBar() {
  return (
    <div className="App">
        <nav className='NavBar'>
            <a className='Nav_items' href='#home'>בית</a>
            <a className='Nav_items' href='#AboutUs'>אודות</a>
            <a className='Nav_items' href='#Team'>חברי הקבוצה</a>
            <a className='Nav_items' href='#Media'>מדיה</a>
        </nav>
    </div>
  );
}

export default NavBar;
