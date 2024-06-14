import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Carta from "../public/Visa.jpg";

const Container = styled.div`
    
`
const D1 = styled.div`
    margin-top: 100px;
    margin-left: 100px;
   
`
const Circle = styled.a`
background-color: #ff0000;
border-radius: 200px;
padding-left: 20px;
padding-top  :20px;
padding-bottom: 15px;
padding-right: 20px;
text-align: center;
 color: #000000;
`
const Text = styled.div`
    font-size: 30px;
    margin-left: 10%;
    margin-top: -30px;
`
const Text1 = styled.div`
    font-size: 30px;
text-align: center;
margin-top: 60px;
`
const Block0 = styled.div`
    display: flex;
    margin-left: 7%;
    margin-top: 60px;
`
const B1 = styled.div`
    margin-left: 10%;
`
const B2 = styled.div`
        margin-left: 10%;
`
const B3 = styled.div`
        margin-left: 10%;
`
const Text2 = styled.div`
    display: flex;
    font-size: 30px;
    margin-left: 10%;
    margin-top: 60px;

`
const D3 = styled.div`
    margin-left: 49%;
`
const D2 = styled.div`
    margin-left: 15%;
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
    margin-left: 61%;
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
    margin-left: 61%;
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
    margin-left: 61%;
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
    margin-left: 61%;
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
    margin-left: 61%;
    border-radius: 20px;
    color: #ffffff;
    text-align: center;
    p{
        font-size: 45px;
    }
    `
const Text3 = styled.div`
  font-size: 30px;  
`
const T1 = styled.div`
    
`
const T2 = styled.div`
    margin-top: 40px;

`
const But = styled.div`
    margin-top: -3%;
`
const But2 = styled.a`
    font-size: 50px;
    margin-left: 30%;
    button{
        background-color: #ffffff;
    height: 100px;
    width: 30%;
    font-size: 40px;
    &:hover{
  background-color: #000000;
  color: #ffffff;
    }
    }
`
const Text10 = styled.div`
    margin-left: 70%;
    margin-top: -60px;
    font-size: 50px;
`
const Text9 = styled.div`
margin-top: -60px;
`
const Oplata = () => {
  return (
  <Container>
  <D1>
   <Circle href='/Corzina'>
   <border>
    <ArrowBackIcon />
  </border>
    </Circle>
   </D1>
   <Text>Оформление заказа</Text>
   <Text1>Способ оплаты</Text1>
   <Block0>
    <img src={Carta} alt=''/>
    <B1>
         <img src={Carta} alt=''/>
    </B1>
   <B2>
    <img src={Carta} alt=''/>
   </B2>
    <B3>
          <img src={Carta} alt=''/>  
    </B3>
</Block0>
<Text2>
товар
<D3>количество</D3>
<D2>стоимость</D2>
</Text2>
<Lines>
    
        <border>
            
        </border>
    </Lines>
    <Block>
        <p>0</p>
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
<Text3>
    <T1>
    Бесплатная доставка:
    </T1>
    <T2>
    Быстрая доставка:
    </T2>
</Text3>
<But>
    <But2 href='/Oplata'>
    <button>оформить заказ</button>
</But2>
</But>
<Text10>
    <Text9>
    Итог:
    </Text9>
</Text10>

   </Container>

  )
}

export default Oplata
