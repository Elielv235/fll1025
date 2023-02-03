import '../App.css'
import People from './People';
import React from 'react';
function peopleGrid(props) {
  return (
    <div id='Media'>
    <div class="container">
        <h2 class="title">Media</h2>
        <div class="photo-gallery">
            <div class="column">
                <People  number="1" />
                <People  number="2" />
                <People  number="3" />
                <People  number="11" />
people
            </div>
            <div class="column">
                <People  number="10" />
                <People  number="4" />
                <People  number="6" />
                <People  number="12" />
            </div>
            <div class="column">
                <People  number="9" />
                <People  number="7" />
                <People  number="8" />
                <People  number="5" />

            </div>
        </div>
    </div>
    </div>
  );
}

export default peopleGrid;
