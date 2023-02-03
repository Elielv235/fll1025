import '../App.css'
function NavBar() {
  return (
    <div className="App">
        <nav className='NavBar'>
            <a className='Nav_items' href=''>בית</a>
            <a className='Nav_items' href=''>אודות</a>
            <a className='Nav_items' href=''>חברי הקבוצה</a>
            <a className='Nav_items' href=''>מדיה</a>
        </nav>
    </div>
  );
}

export default NavBar;
