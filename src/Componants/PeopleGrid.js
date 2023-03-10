import '../App.css'
import * as Componants from '../imports';
import React from 'react';
function peopleGrid(props) {

  return (
    <>
    <Componants.NavBar/>
    <div id='Team'>
    <div className="container">
        <h2 className="title">חברי הקבוצה</h2>
        <div className="photo-gallery">
            <div className="column">
                <Componants.People text="שלום, אני אליאל. השיעורים האהובים עלי הם רובוטיקה  ומטמטיקה. בזמני הפנוי אני אוהב לשחק במחשב ולתכנת" name="אליאל"  number="1" />
                <Componants.People name="אמילי"   number="2" />
                <Componants.People name="ליהיא"  number="3" />
                <Componants.People name="ולריה"  number="11" />

            </div>
            <div className="column">
                <Componants.People name="שי"  number="10" />
                <Componants.People name="מאיה"  number="4" />
                <Componants.People name="עופרי" number="6" />
                <Componants.People name="יניב"  number="12" />
            </div>
            <div className="column">
                <Componants.People name="שחר"  number="9" />
                <Componants.People name="רפאל"  number="7" />
                <Componants.People name="רומי" number="8" />
                <Componants.People name="נדב"  number="5" />

            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default peopleGrid;
