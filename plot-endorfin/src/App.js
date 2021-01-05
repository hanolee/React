import React , {useState} from 'react'
import EndorfinChart from './Components/endorfinChart'
import getData from './ContractFeed/constractFeed'
//import './Contract/oraclecontracts_Mainnet'

function App() {
  console.log(getData())  
  const [index, setIndex] =  useState(0)
  
  let a = 12
  let b = 34
  let c = 40

  const sum = ()=>{
    setIndex(index + a+b+c)
  }
  const push = () =>{
    
  }
  //블록스탬프 찍어서 x값 설정 86400으로 나눠서 1440으로 나누고 등등 시간을 추가해주기
  //y값은 sum함수 이용해서 3개의 값 더해주고, 배열에 push해주기
  const xValue = [1,2,3]
  const yValue = [2,6,3]

  const data = [
    {
      x: {xValue},
      y: {yValue},
      type: 'scatter',
      mode: 'lines+markers',
      marker: {color: 'red'},
    },
    {type: 'line', x: [1, 2, 3], y: [2, 5, 3]},
  ]
const layout = {width: 520, height: 340, title: 'A Fancy Plot'}

  return (
    <div className="App">
      <h1>현재 가격은 {index}입니다</h1>
      <button onClick = {sum}>a,b,c 더하기</button>
      
      <h1>그래프</h1>
      <EndorfinChart data = {data} layout = {layout} isFulled = {true}/>
      <EndorfinChart data = {data} layout = {layout} isFulled = {false}/>
      <EndorfinChart data = {data} layout = {layout} isFulled = {true}/>
    </div>
  );
}

export default App;
