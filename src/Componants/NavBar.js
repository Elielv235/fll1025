import '../App.css'
import Grid_Image from './children/image';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  import * as Componants from '../imports'
export function NavBar() {

  return (
    <div  className="App">
        <nav className='NavBar'>
        <div className="Logo">
            <Grid_Image number="logo" className="Logo"/>
        </div>
        <h2 className='textnav'>Agnon energy Team #1052</h2>
        <Router>
        <Routes>
          {/* This route is for home element 
          with exact path "/", in element props 
          we passes the imported element*/}
          <Route exact path="/" element={<Componants.Home/>} />
            
          {/* This route is for about element 
          with exact path "/about", in element 
          props we passes the imported element*/}
          <Route path="/about" element={<Componants.About/>} />
            
          {/* This route is for contactus element
          with exact path "/contactus", in 
          element props we passes the imported element*/}
          <Route path="/MeetOurTeam" element={<Componants.PeopleGrid/>} />
          <Route path="/Media" element={<Componants.ImageGrid/>} />
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home element with to="/" */}
          
        </Routes>
      </Router>
          
          <Link to="/about">אודות</Link>
          <Link to="/MeetOurTeam">חברי הקבוצה</Link>
          <Link to="/Media">מדיה</Link>
            <a href='.#Media'><Link to="/">בית</Link></a>
            <a href='#Team'>חברי הקבוצה</a>
            <a href='#Media'>מדיה</a>
        </nav>
    </div>
  );
}


