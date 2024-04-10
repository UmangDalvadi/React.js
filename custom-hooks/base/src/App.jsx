import { useState, Component, useEffect } from 'react'

import './App.css'

function App() {

  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 5000)
  }, [])

  return (


    <>
      <MyIncrement />
      <MyDecrement />

      {render ? <LifeCycleEvent /> : <div></div>}  
    </>
  )
}


//Functional components
const MyIncrement = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return <div>
    <b>{count}</b> <br />
    <button onClick={increment}>Increment</button>
  </div>
}

//Class based components
class MyDecrement extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return <div>
      <b>{this.state.count}</b> <br />
      <button onClick={this.decrement}>Decrement</button>
    </div>
  }
}

function LifeCycleEvent() {

  useEffect(() => {

    //Mount means whenever the first time component render on this screen
    console.log("Component mounted");

    //This logic run whenever dependency change or if theire is no depndency then whenever componenet re-render
    //And this run because of clear previous mount and then after it mount again
    return () => {
      console.log("Component unmounted");
    };

  }, []);

  //Using this life cycle events we can run some code while mounting and unmounting and also do this again and again by changing dependency or calling components 

  return <div>
    <p>Hello </p>
  </div>
}

export default App
