import React from 'react'
import styled from 'styled-components'
import Roblox from '../public/ROlax.jpg'
import Chorni from '../public/Chorni.jpg'

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
const Neglavnii = styled.div`
  background-color: white;
  width: 100%;
  height:100%;
  display: flex;
  img{
    padding-top: 7px;
  }
  p{
    padding-left: 117px;
    padding-top: 101px;
    font-size: 36px;
  }
`
const Lines1 = styled.div`
background-color: #000000;
margin-top: 7px;
height: 2px;
width: 200%;
`
const News = () => {
  return (
  <div>
    <Glavnii href='/'>
      <p>Главная страница</p>
    </Glavnii>
    <Neglavnii>
    <img src={Roblox} alt=''/>
    <p>Часы от бренда “Rolex” поступили к нам на продажу</p>
    </Neglavnii>
    <Lines1/>
    <Neglavnii>
    <img src={Chorni} alt=''/>
    <p>Теперь у нас появился свой сайт, в честь этого мы даём 10% скидку на костюмы!</p>
    </Neglavnii>
  </div>
  )
}

export default News