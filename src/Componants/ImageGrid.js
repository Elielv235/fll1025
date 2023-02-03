import '../App.css'
import Grid_Image from './image';
import React from 'react';
function NavBar(props) {
  return (
    <div class="container">
        <h2 class="title"></h2>
        <div class="photo-gallery">
            <div class="column">
                <Grid_Image  number="1" />
                <Grid_Image  number="2" />
                <Grid_Image  number="3" />
            </div>
            <div class="column">
                <Grid_Image  number="10" />
                <Grid_Image  number="4" />
                <Grid_Image  number="6" />
            </div>
            <div class="column">
                <Grid_Image  number="9" />
                <Grid_Image  number="7" />
                <Grid_Image  number="8" />
                <Grid_Image  number="5" />
            </div>
        </div>
    </div>
  );
}

export default NavBar;
