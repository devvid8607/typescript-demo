import React from 'react';
import './App.css';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

function App() {

  // const PersonsList=[{first:'Vidhya',last:'Ramamoorthy'},{first:'Gautham',last:'VinodKrish'},{first:'Usha',last:'KR'}]
  // const PersonName={
  //   first:'Gautham',
  //   last:'Vinod Krishnan'
  // }
  return (
    <div className="App">
      <Greet name='Gautham' isLoggedIn={false}/>
      {/* <Person name={PersonName}/>
      <PersonList names={PersonsList}/>
      <Status status='loading'/> */}
      <Heading>Placeholder Children</Heading>
      <Oscar><Heading>Oscar goes to Decaprio</Heading></Oscar>
      <Input value='' handleChange={(event)=>console.log(event)}></Input>
      <Button handleClick={(event,id)=>console.log('Button Clicked',event,id )}/>
      <Container styles={{border:'1px solid black'}}></Container>

     

    </div>
  );
}

export default App;
