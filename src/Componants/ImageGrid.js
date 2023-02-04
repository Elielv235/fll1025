import '../App.css'
import Grid_Image from './children/image';
import React from 'react';
function NavBar(props) {
  return (
    <div id='Media'>
    <div class="container">
        <h2 class="title">מדיה</h2>
        <div class="photo-gallery">
            <div class="column">
                <Grid_Image  number="1" />
                <Grid_Image  number="2" />
                <Grid_Image  number="3" />
                <Grid_Image  number="11" />
                
            </div>
            <div class="column">
                <Grid_Image  number="10" />
                <Grid_Image  number="4" />
                <Grid_Image  number="6" />
                <Grid_Image  number="13" />
                <Grid_Image  number="14" />
            </div>
            <div class="column">
                <Grid_Image  number="9" />
                <Grid_Image  number="7" />
                <Grid_Image  number="8" />
                <Grid_Image  number="5" />
                <Grid_Image  number="15" />
            </div>
        </div>
    </div>
    </div>
  );
}

export default NavBar;
