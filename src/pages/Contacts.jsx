import React from 'react'
import styled from 'styled-components'
const Glavnii = styled.a`
  background-color: black;
  width: 100%;
  height: 111px;
  display: flex;
  text-decoration: none;
  p{
    color: white;
    font-size: 36px;
    padding-left: 45px; 
    text-align: center;
    margin-top: 30px;
  }
`
const Neglavnii1 = styled.div`
    display: flex;
    padding-top: 75px;
    padding-left: 27px; 
    font-size: 36px;
`
const Neglavnii2 = styled.div`
    display: flex;
    padding-top: 30px;
    padding-left: 27px; 
    font-size: 36px;
`
const Neglavnii3 = styled.div`
    display: flex;
    padding-top: 30px;
    padding-left: 27px; 
    font-size: 36px;
`
const Neglavnii4 = styled.div`
    display: flex;
    padding-top: 30px;
    padding-left: 27px; 
    font-size: 36px;
`
const Contacts = () => {
  return (
    <div>
    <Glavnii href='/'>
      <p>Главная страница</p>
    </Glavnii>
    <Neglavnii1>
        <p>Номер управляющего:</p>
        <p>+ 7 (967) 061-04-79</p>
    </Neglavnii1>
    <Neglavnii2>
        <p>Номер технаря:</p>
        <p>+7 (903) 284-37-79</p>
    </Neglavnii2>
    <Neglavnii3>
        <p>Номер владельца:</p>
        <p>+7 (924) 179-41-72</p>
    </Neglavnii3>
    <Neglavnii4>
        <p>Номер нашего оператора:</p>
        <p>+7(903) 184-56-70</p>
    </Neglavnii4>
    </div>
  )
}

export default Contacts