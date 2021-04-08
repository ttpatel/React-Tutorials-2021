import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet(T-5)'
import Welcome from './components/Welcome(T6)'
import Hello from './components/T8'
import Hello1 from './components/T9'
import Message from './components/Message(T10)'
function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome/>
      <Hello/>
      <Hello1 name='Teerth Patel' heroname='TT'>
        <p>This is child para </p></Hello1>
      <Hello1 name='Jay Patel' heroname='Jackc'>
        <button>Action</button>
      </Hello1>
      <Hello1 name='Bhargav Patel' heroname='bhagu'/>
      <Hello1 name='Ruturaj Mahida' heroname='Rutu'/>
      <Welcome name='Bhargav Patel' heroname='bhagu'/>
      <Welcome name='Ruturaj Mahida' heroname='Rutu'/> */}
      <Message/>
    </div>
  );
}

export default App;
