import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  
   
    const { greetings }= useSelector((state) => state.greetings)
    return (
      <>
        <h2>Hello World!</h2>
        <h1>{ greetings }</h1>
      </>
    )
  }

export default Greeting;
