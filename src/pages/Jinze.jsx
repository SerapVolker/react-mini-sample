import React from 'react';
import styled from 'styled-components';
import Diamond from '../public/Youtube.svg';
import Emerald from '../public/VK.svg';
import Redstone from '../public/instagram.svg';
import Coal from '../public/Twitter.svg';
import Iron from '../public/Face.svg';
import Cos from "../public/jinze.jpg";

const Containers = styled.div`
    font-family: "Roboto", sans-serif;
`
const Height = styled.div`
height: 60px;
padding-top: 10px;
background-color: rgb(0, 0, 0);
width: 200%;
color: aliceblue;
display: flex;
`
const Light = styled.div`
    
`
const News =styled.div`
margin-top: 10px;
margin-left: 17%;
font-size: 25px;
`
const Us =styled.div`
   margin-left: 5%;
   margin-top: 10px;
   font-size: 25px;
`
const New =styled.div`
   margin-left: 5%;
   margin-top: 10px;
   font-size: 25px;
`
const Contacs =styled.div`
       margin-left: 5%;
       margin-top: 10px;
       font-size: 25px;
`
const Corzin = styled.a`
    color: aliceblue;
    margin-top: 10px;
    margin-left: 4%;
    display: flex;
    text-decoration: none;
    font-size: 25px;
`
const D2 = styled.div`
    margin-top: 4px;
`
const Text = styled.div`
    font-size: 60px;
    margin-top: 60px;
    margin-left: 60px;
`
const Complect = styled.div`
    display: flex;
    font-size: 30px;
margin-top: 9%;
margin-left: 60px;
`
const Text1 = styled.div`
margin-left: 50%;
`
const Text2 = styled.div`
margin-left: 10%;
`

const Text3 = styled.div`
margin-left: 10%;
`
const Lines = styled.div`
background-color: #000000;
margin-top: 60px;
height: 2px;
width: 200%;
`
const Lines1 = styled.div`
background-color: #000000;
margin-top: 15%;
height: 2px;
width: 200%;
`
const Lines2 = styled.div`
background-color: #000000;
margin-top: 15%;
height: 2px;
width: 200%;
`
const Lines3 = styled.div`
background-color: #000000;
margin-top: 15%;
height: 2px;
width: 200%;
`
const Lines4 = styled.div`
background-color: #000000;
margin-top: 15%;
height: 2px;
width: 200%;
`
const Lines5 = styled.div`
background-color: #000000;
margin-top: 15%;
height: 2px;
width: 200%;
`
const Block = styled.div`
    background-color: #000000;
    height: 60px;
    margin-top: 10px;
    width: 60px;
    margin-left: 71%;
    border-radius: 20px;
    color: #ffffff;
    text-align: center;
    p{
        font-size: 45px;
    }
`
const Block1 = styled.div`
    background-color: #000000;
    height: 60px;
    margin-top: 10px;
    width: 60px;
    margin-left: 71%;
    border-radius: 20px;
    color: #ffffff;
    text-align: center;
    p{
        font-size: 45px;
    }
`
const Block2 = styled.div`
    background-color: #000000;
    height: 60px;
    margin-top: 10px;
    width: 60px;
    margin-left: 71%;
    border-radius: 20px;
    color: #ffffff;
    text-align: center;
    p{
        font-size: 45px;
    }
`
const Block3 = styled.div`
    background-color: #000000;
    height: 60px;
    margin-top: 10px;
    width: 60px;
    margin-left: 71%;
    border-radius: 20px;
    color: #ffffff;
    text-align: center;
    p{
        font-size: 45px;
    }
`
const Block4 = styled.div`
    background-color: #000000;
    height: 60px;
    margin-top: 10px;
    width: 60px;
    margin-left: 71%;
    border-radius: 20px;
    color: #ffffff;
    text-align: center;
    p{
        font-size: 45px;
    }
`
const But = styled.div`
    margin-top: 100px;
`
const Block5 = styled.a`
background-color: #ffffff;
border-style: double;
border-color: #000000;
margin-left: 36%;
margin-top: 10%;
padding-top:50px;
padding-bottom: 50px;
padding-left: 100px;
padding-right: 100px;
font-size: 30px;
color:#000000;
text-decoration: none;
`
const Container = styled.div`
 margin-top: 10%;
 background-color:  #1D1A1A;
  height:315px;
  width: 100%;
`
const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
`
const B1 = styled.div`
 flex:1;
 color: white;
 padding-top: 60px;
 padding-left: 99px;
 font-size: 24px;
 font-family: "Roboto", sans-serif;
`
const B2 = styled.div`
  flex:1;
  color: white;
 font-size: 24px;
 font-family: "Roboto", sans-serif;
 padding-top: 60px;
 padding-left: 18px;
 padding-bottom: 36;
`

const B3 = styled.div`
 flex:1;
 color: white;
 font-size: 24px;
 font-family: "Roboto", sans-serif;
 padding-top: 60px;
 padding-left: 14px;
 padding-bottom: 36px;
`
const B4 = styled.div`
  flex:2;
  padding-top: 75px;
  padding-right: 892;
  img{
    margin-right: 50px;
  }
`
const B16 = styled.div`
margin-top: 20px;
`
const B17 = styled.div`
    margin-top: 20px;
`
const B18 = styled.div`
    margin-top: 20px;
`
const B19 = styled.div`
    margin-top: 20px;
`
const Photo = styled.div`
padding-top: 60px;
display: flex;
`
const T2 = styled.div`
    margin-left: 20px;
    margin-top: 50px;
    font-size: 30px;
`
const T10 = styled.div`
    margin-left: 28%;
    font-size: 30px;
    margin-top: -4%;
`
const T11 = styled.div`
    margin-left: 44%;
    font-size: 30px;
    margin-top: -35px;
    
`
const Jinze = () => {
  return (
    <Containers>
    <Height>
<Light>

</Light>
<News>новости</News>
<Us>о нас</Us>
<New>новинки</New>
<Contacs>контакты</Contacs>
<Corzin href="/shop">
 Каталог</Corzin>
</Height>
<Text>Корзина</Text>
<Complect>
  товар
    <Text1>
    цена
    </Text1>
    <Text2>
    количество
    </Text2>
    <Text3>
    cтоимость
    </Text3>
   
</Complect> 
<Lines>
    <Photo>
        <img src={Cos}/>
        <T2>Джинсы</T2>
    </Photo>
        <border>
            
        </border>
        <T10>1900 ₽</T10>
        <T11>1900 ₽</T11>
    </Lines>
    
    <Block>
        <p>1</p>
        <border>

        </border>
    </Block>
    <Lines1>
    
        <border>
            
        </border>
    </Lines1>
    <Block1>
        <p>0</p>
        <border>

        </border>
    </Block1>
    <Lines2>
    
        <border>
            
        </border>
    </Lines2>
    <Block2>
        <p>0</p>
        <border>

        </border>
    </Block2>
    <Lines3>
    
    <border>
        
    </border>
</Lines3>
<Block3>
        <p>0</p>
        <border>

        </border>
    </Block3>
<Lines4>
    
    <border>
        
    </border>
</Lines4>
<Block4>
        <p>0</p>
        <border>

        </border>
    </Block4>
<Lines5>
    
    <border>
        
    </border>
</Lines5>
<But>
    <Block5 href="/Oplata">
    
OФОРМИТЬ ЗАКАЗ
</Block5>
</But>
<Container>
<Wrapper>
<B1>
    <p>Пн-Вс 10:00-19:00</p>
    <B18>
        <p>+(996)703-717-108</p>
    </B18>
    
  </B1>
  <B2>
    <p>Мужчинам</p>
    
<B16>
    <p>Женщинам</p>
</B16>
 <B17>
     <p>Новинки</p>
    </B17>   
</B2>
<B3>
    <p>Оплата</p>
    <B19>
    <p>Доставка</p>
    </B19>

  </B3>
  <B4>
  <img src={Redstone} />
  <img src={Emerald} />
  <img src={Coal} />
  <img src={Iron} />
  <img src={Diamond} />
  </B4>
</Wrapper>
</Container>
</Containers>
  )
}

export default Jinze
