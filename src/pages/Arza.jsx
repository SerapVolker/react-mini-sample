import React from 'react'
import styled from 'styled-components'
import Los from '../public/323.jpg'
import Las from '../public/1111.jpg'
import Les from '../public/01.jpg'
const Container = styled.div`
  
`
const Border = styled.div`
  background-color: #000000;
  width: 100%;
  padding-top: 3%;
`
const Text = styled.a`
  color:aliceblue;
  text-decoration: none;
  font-size: 30px;

`
const Min = styled.div`
  margin-top: -50px;
  margin-left: 30px;
`
const Photo = styled.div`
  margin-top: 60px;
  display: flex;
  margin-left: 15%;
`
const H1 = styled.div`
  margin-left: 10%;
`
const H2 = styled.div`
  margin-left: 10%;
`
const Text1 = styled.div`
  margin-left: 18%;
  font-size: 30px;
`
const Text2 = styled.div`
  text-align: center;
  font-size: 30px;
  margin-top: -70px;
  margin-left: -40px;
`
const Text3 = styled.div`
  text-align: center;
  font-size: 30px;
  margin-left: 48%;
  margin-top: -70px;
`
const Text4 = styled.div`
font-size  : 30px;
margin-top: 60px;
margin-left: 30px;
`
const H6 =styled.div`
  background-color: #000000;
  height: 2px;
  margin-top: 30px;
`
const Text5 = styled.div`
font-size  : 30px;
margin-top: 60px;
margin-left: 30px;
`
const H7 = styled.div`
  background-color: #000000;
  height: 2px;
  margin-top: 30px;
`
const Text6 = styled.div`
  font-size  : 30px;
margin-top: 60px;
margin-left: 30px;
`

const Arza = () => {
  return (
 <Container>
   <Border>
    <Min>
   <Text href='/'>
  Главная страница
  </Text>   
    </Min>
  </Border>
  <Photo>
<img src={Los}/>
<H1>
<img src={Las}/>
</H1>
<H2>
<img src={Les}/>
</H2>
  </Photo>
  <Text1>
<p>Илья </p>
<p>Пономарёв</p>
  </Text1>
  <Text2>
    <p>Мурад</p>
    <p>Талыбов</p>
  </Text2>
  <Text3>
    <p>Эльдар</p>
    <p>Петров</p>
  </Text3>
  <Text4>
  Илья Пономарёв - Наш управляющий и просто Лысик, лучший управляющий в мире. Его лысина блестит и светит ярче солнца. Главная задача Ильи просто быть и украшать наш сайт.
  </Text4>
  <H6>

  </H6>
<Text5>
Мурад Талыбов - Наш ленивый технарь, который ничего практически не делал но делал. Его главная задача чинить сайт, вы можете обратится к нему по любому вопросу о сайте, Уверяю вас он вам ничего не ответит.
</Text5>
<H7>

</H7>
<Text6>
Эльдар Петров - Владелец сайта, это тот самый человек, который делает всё сам и работает вне себя. Идея создать онлайн магазин одежды принадлежит нашему замечательному Эльдару. Он работал над макетом и составлял план по вёрстке сайта.
</Text6>

 </Container>
  )
}

export default Arza
