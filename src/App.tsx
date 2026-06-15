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
import Effect from './components/Effect';
import MediumCard from './components/MediumCard/MediumCard';
import SmallCard from './components/SmallCard/SmallCard';
import PostsList from './components/PostsList/PostsList';
import Context from './components/Context/Context';
import Refs from './components/Refs';
import Toggle from './components/Toggle';
import { ExampleContext } from './providers/ExampleContext';


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
     <ExampleContext>
        <Context></Context>
        <Refs></Refs>
        <Toggle></Toggle>
     </ExampleContext>

    </>
  );
}

export default App;