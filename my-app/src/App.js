// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

function App() {
  let arrtodo = [
    {
      name: "umang",
      dept: "informatin technology",
      sem: 4,
      age: 19
    },
    {
      name: "vikash",
      dept: "computer engineering",
      sem: 8,
      age: 22
    },
    {
      name: "keval",
      dept: "civil engineering",
      sem: 2,
      age: 17
    }
  ]
  return (


    <>
      {/* <Navbar title='umang' home='uhome' /> */}
      < Navbar home='uhome' search={false} />
      <Todos arrtodo={arrtodo} />
      <Footer />
    </>
  );
}

export default App;
