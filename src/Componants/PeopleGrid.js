import '../App.css'
import * as Componants from '../imports';
import React from 'react';
function peopleGrid(props) {

  return (
    <div id='Team'>
    <div class="container">
        <h2 class="title">חברי הקבוצה</h2>
        <div class="photo-gallery">
            <div class="column">
                <Componants.People name="אליאל"  number="1" />
                <Componants.People name="אמילי"   number="2" />
                <Componants.People name="ליהיא"  number="3" />
                <Componants.People name="ולריה"  number="11" />

            </div>
            <div class="column">
                <Componants.People name="שי"  number="10" />
                <Componants.People name="מאיה"  number="4" />
                <Componants.People name="עפרי" number="6" />
                <Componants.People name="יניב"  number="12" />
            </div>
            <div class="column">
                <Componants.People name="שחר"  number="9" />
                <Componants.People name="רפאל"  number="7" />
                <Componants.People name="רומי" number="8" />
                <Componants.People name="נדב"  number="5" />

            </div>
        </div>
    </div>
    </div>
  );
}

export default peopleGrid;
