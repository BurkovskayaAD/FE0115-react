import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import User from './components/User/User';
import PropsChildren from './components/PropsChildren';
import ExampleState from './components/ExampleState';
import Map from './components/Map';
import Form from './components/Form';
import ConditionalState from './components/ConditionalState';
import Input from './components/Input/Input';
import LifeCycle from './components/LifeCycle';

import Shrek from  './assets/shrek.jpg'
import Smart from './components/Smart';
import BigCard from './components/BigCard/BigCard';


function App() {

  let word: string = "Hello";
  function returnFive(): number {
    return "aaaaa".length;
  }

  const sayHi = function(): void {
    alert("Hi")
  }

  const sayBye = function(): void {
    alert("Bye")
  }

  return (
    <>
      {/* <div className='main'>{returnFive()}</div>
      <Button isDisable={true} functionClick={sayBye} content="12"></Button>
      <Button isDisable={true} functionClick={sayHi} content="fffff"></Button>
      <Button isDisable={false} functionClick={sayBye} content="324324"></Button>
      <Button isDisable={false} functionClick={sayHi} content="fdgdfgdfg"></Button>

      <User surname="Hanna Burkovskkaya"></User>

      <PropsChildren>dsfodsf</PropsChildren>

      <ExampleState></ExampleState>

      <Map></Map>

      <Form></Form>

      <ConditionalState></ConditionalState>

      <Input inputType="text" inputLabel="Name" inputPlaceholder="Enter name..." isDisable={false}></Input>

      <img src={Shrek} alt="this is Shrek" /> */}

      {/* <LifeCycle></LifeCycle> */}

      {/* <Smart></Smart> */}

      <BigCard></BigCard>
    </>
  );
}

export default App;