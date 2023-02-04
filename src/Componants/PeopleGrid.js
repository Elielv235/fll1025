import '../App.css'
import * as Componants from '../imports';
import React from 'react';
function peopleGrid(props) {

  return (
    <div id='Team'>
    <div class="container">
        <h2 class="title">אנשי הקבוצה</h2>
        <div class="photo-gallery">
            <div class="column">
                <Componants.People  number="1" />
                <Componants.People  number="2" />
                <Componants.People  number="3" />
                <Componants.People  number="11" />

            </div>
            <div class="column">
                <Componants.People  number="10" />
                <Componants.People  number="4" />
                <Componants.People  number="6" />
                <Componants.People  number="12" />
            </div>
            <div class="column">
                <Componants.People  number="9" />
                <Componants.People  number="7" />
                <Componants.People  number="8" />
                <Componants.People  number="5" />

            </div>
        </div>
    </div>
    </div>
  );
}

export default peopleGrid;
