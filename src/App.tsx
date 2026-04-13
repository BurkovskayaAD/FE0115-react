import React from 'react';
import './App.css';
import Button from './components/Button/Button';

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
      <div className='main'>{returnFive()}</div>
      <Button isDisable={true} functionClick={sayBye} content="12"></Button>
      <Button isDisable={true} functionClick={sayHi} content="fffff"></Button>
      <Button isDisable={false} functionClick={sayBye} content="324324"></Button>
      <Button isDisable={false} functionClick={sayHi} content="fdgdfgdfg"></Button>
    </>
  );
}

export default App;
