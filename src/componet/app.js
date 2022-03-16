import React from 'react';
import CardOne from './card';
import Card2 from './card';
import Css from './app.css'


const peoples = [
{name:'hanam', job:'developer'},
{name:'suhan', job:'softwer-developer'}
]

const App=()=>{
    return(
        <>
       {peoples.map(people=> <Card2 name={people.name} job = {people.job} />)}

      
       
        </>
    )
}
export default App;