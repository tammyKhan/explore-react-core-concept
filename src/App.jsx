
import './App.css'
import Counter from './Counter.jsx';
import Friends from './Friends.jsx';
import Team from './Team.jsx'
import Users from './Users.jsx';


function App() {
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert ('button 2 clicked')
  }

  const addToFour = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concepts </h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>first</button>
      <button onClick={handleClick2}>second</button>
      <button onClick={() =>{alert('third clicked')}}>third</button>
      <button onClick={() => addToFour(4)}>fourth</button>
      <button onClick={() =>{alert('third clicked')}}>fifth</button>
      
    </>
  )
}

export default App
