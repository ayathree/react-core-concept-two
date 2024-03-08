
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './User'
import Team from './team'



function App() {

  function handleClick(){
    alert('button clicked')
  }
  
  const clickHere =(num)=>{
    alert(num+7)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
    
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click here</button>
      <button onClick={()=>{alert('button has clicked')}}>button 2</button>
      <button onClick={()=>clickHere(7)}>clicked</button>
    </>
  )
}



export default App
