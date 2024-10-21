import User from "./User";
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button click");
  }
  const handleClick2 = () => {
    alert("button 2 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h2>React Core Concepts 2</h2>

      <Friends></Friends>

      <User></User>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click 2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        click 3
      </button>

      {/* bejailla */}
      <button
        onClick={() => {
          addToFive(3);
        }}
      >
        Click 4
      </button>
    </>
  );
}

export default App;
