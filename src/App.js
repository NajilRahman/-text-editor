import './App.css';
import Navbar from './components/navbar';
import TextArea from './components/textArea';
function App() {
  return (
    <div className="App">
     <Navbar more="More" paidUser="Premium"/>
     <TextArea textState="Enter Your Words"/>
    </div>
  );
}

export default App;
