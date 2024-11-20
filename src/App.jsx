import { useState, useRef, useEffect } from "react";

import { Welcome, StepOne, StepTwo, StepThree, StepFour, Thanks } from './pages';
import { Progress } from './components'
import "./App.css";
import "./styles/main.css";


export const App = () => {
  // const firstNameInput = useRef(null)
  // const lastNameInput = useRef(null)

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const [counter, setCounter] = useState(0)

  // let counter2 = 0

  // useState - сообщает Реакту за какими переменными следить, чтобы делать изменения в UI

  // useRef - используется для объектов, в том числе и DOM-элементов
  // useEffect - используется для побочек

  // useMemo
  // useCallback

  // useContext
  // useReducer

  // useLayoutEffect
  // useInsertionEffect
  // useOptimistic


  // const onButtonClickHandler = () => {
  //   setFirstName(firstNameInput.current.value)
  //   setLastName(lastNameInput.current.value)
  // }

  // const onIncrement = () => {
  //   setCounter(counter + 1)
  // }

  // const onIncrementWithoutState = () => {
  //   counter2++

  // }

  // console.log(date.getDate());
  // console.log(date.getMonth());
  // console.log(date.getFullYear());

  // вызывается при каждом рендере
  // useEffect(() => {
  //   console.log('I am from useEffect')
  // })

  // вызывается при первом рендере (инициализации компонента)
  // useEffect(() => {
  //   console.log('I am from useEffect')
  // }, [])


  // вызывается при первом рендере и каждом изменении counter
  // useEffect(() => {
  //   console.log('I am from useEffect')
  // }, [counter])

  // useEffect(() => {
  //   console.log('I am from useEffect')
  // }, [counter2])

 
  let date = new Date()

  let hours = date.getHours().toString().padStart(2, 0)
  let minutes = date.getMinutes().toString().padStart(2, 0)
  let seconds = date.getSeconds().toString().padStart(2, 0)

  const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`)

  useEffect(() => {
   const intervalId = setInterval(() => {
      date = new Date()
  
      hours = date.getHours().toString().padStart(2, 0)
      minutes = date.getMinutes().toString().padStart(2, 0)
      seconds = date.getSeconds().toString().padStart(2, 0)
  
      setTime(`${hours}:${minutes}:${seconds}`)
      console.log(time);
      
  
    }, 500)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  

  return (
    <div className="App">
      <div className="time">
        {time}
      </div>
      {/* <Progress steps={5} activeStep{2}/> */}
      {/* <Welcome />
      <input
        type="text"
        id="firstname"
        style={{ border: '2px solid black' }}
        placeholder="First name"
        ref={firstNameInput} />

      <input
        type="text"
        id="lastname"
        style={{ border: '2px solid black' }}
        placeholder="Last name"
        ref={lastNameInput} />

      <button onClick={onButtonClickHandler}>Click me</button>
      <h1>{firstName + ' ' + lastName}</h1>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3> */}

      {/* <input
        type="text"
        id="firstname"
        style={{ border: '2px solid black' }}
        placeholder="First name"
        ref={firstNameInput} />

      <input
        type="text"
        id="lastname"
        style={{ border: '2px solid black' }}
        placeholder="Last name"
        ref={lastNameInput} />

      <button onClick={onButtonClickHandler}>Click me</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={onIncrementWithoutState}>+++++++</button>
      <h1>{firstName + ' ' + lastName}</h1>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3> */}
    </div>
  );
};
