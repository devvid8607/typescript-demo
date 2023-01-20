import React from "react";
import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Lists } from "./components/generics/Lists";
import { CustomButton } from "./components/HTMLComponents/Button";
import { Test } from "./components/polymorphic/Test";
import { RandomNumber } from "./components/restricts/RandomNumber";
import { Toast } from "./components/template-literals/Toast";
// import { Counter } from "./components/state/Counter";
// import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/context/User";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import { Box } from "./components/context/Box";
// import { UserContextProvider } from "./components/context/UserContext";
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Greet } from './components/Greet';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
// import { Container } from './components/Container';
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
      {/* <Greet name='Gautham' isLoggedIn={false}/> */}
      {/* <Person name={PersonName}/>
      <PersonList names={PersonsList}/>
      <Status status='loading'/> */}
      {/* <Heading>Placeholder Children</Heading>
      <Oscar><Heading>Oscar goes to Decaprio</Heading></Oscar>
      <Input value='' handleChange={(event)=>console.log(event)}></Input>
      <Button handleClick={(event,id)=>console.log('Button Clicked',event,id )}/>
      <Container styles={{border:'1px solid black'}}></Container> */}
      {/* <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Counter message="hi user" /> */}
      {/* <Private isLoggedIn={true} Component={Profile}></Private>
      <Lists items={["A", "B", "C"]} onClick={(item) => console.log(item)} />
      <Lists items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <Lists
        items={[
          { first: "v", last: "n" },
          { first: "p", last: "u" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive={true}></RandomNumber> */}
      <Toast position="center-top" />
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        test
      </CustomButton>
      <Test as="h2">test</Test>
      <Test as="p">test</Test>
    </div>
  );
}

export default App;
